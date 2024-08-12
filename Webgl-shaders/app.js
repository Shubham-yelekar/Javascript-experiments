async function fetchShader(url) {
    const response = await fetch(url);
    return await response.text();
  }

async function main() {
    const canvas = document.getElementById("glcanvas");
    let gl = canvas.getContext('webgl');

    if (!gl) {
      console.error("WebGL not supported, falling back on experimental-webgl");
      gl = canvas.getContext("experimental-webgl");
    }

    if (!gl) {
      alert("Your browser does not support WebGL");
      return;
    }


    const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    void main() {
      gl_Position = aVertexPosition;
    }
  `;

    const fragmentShaderSource = await fetchShader('shader.glsl');

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error("ERROR compiling vertex shader!", gl.getShaderInfoLog(vertexShader));
    return;
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(fragmentShader));
    return;
    }

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error("ERROR linking program!", gl.getProgramInfoLog(shaderProgram));
      return;
    }
    gl.useProgram(shaderProgram);

    const vertices = new Float32Array([
        -1.0, -1.0,
        1.0, -1.0,
        -1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        1.0, 1.0
      ]);

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      const positionAttributeLocation = gl.getAttribLocation(shaderProgram, "aVertexPosition");
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      const resolutionUniformLocation = gl.getUniformLocation(shaderProgram, "iResolution");
      const timeUniformLocation = gl.getUniformLocation(shaderProgram, "iTime");

      function render(time) {
        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
        gl.uniform1f(timeUniformLocation, time * 0.001);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
      }

      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      requestAnimationFrame(render);

    // Additional WebGL setup and rendering code can go here
  }

  window.onload = main;