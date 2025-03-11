console.log("shared_macros.js loaded!");

MathJax.Hub.Config({
  TeX: {
    Macros: {
      R: '{\\mathbb{R}}',
      Z: '{\\mathbb{Z}}',
      vect: ['{\\mathbf{#1}}', 1]
      "data": "\\mathcal{D}"
      "pars": "\\boldsymbol{\\theta}"
      "para": "\\theta"
      "optpars": "\\pars^*"
      "optpara": "\\para^*"
      "prob": "\\mathbb{P}"
      "cprob": ["\\prob\\left( #1 \\, \\left\\vert \\, #2 \\right. \\right)",2]
      "cprobsub": ["\\prob_{#1}\\left( #2 \\, \\left\\vert \\, #3 \\right. \\right)",3]
      "pdf": ["p \\left( #1 \\, \\left\\vert \\, #2 \\right. \\right)",2]
      "pdfsub": ["p_{#1} \\left( #2 \\, \\left\\vert \\, #3 \\right. \\right)",3]
      "p": ["p \\left( #1 \\right)",1]
      "psub": ["p_{#1} \\left( #2 \\right)",2]
      "futuredata": "\\mathcal{F}"
      "expect": ["\\mathbb{E} \\left[ #1 \\right]",1]
      "var": ["\\text{Var} \\left( #1 \\right)",1]
      "std": ["\\text{Std} \\left( #1 \\right)",1]
      "cov": ["\\text{Cov} \\left( #1, #2 \\right)",2]
      "dmat": "\\boldsymbol{X}"
      "models": ["\\boldsymbol{M}\\left( #1 \\, ; \\, #2 \\right)",2]
      "model": ["M\\left( #1 \\, ; \\, #2 \\right)",2]
      "modeloutputs": "\\boldsymbol{M}"
      "modeloutput": "M"
      "MLmodel": ["\\boldsymbol{\\hat{y}}\\left( #1 \\right)",1]
      "MLoutputs": "\\boldsymbol{\\hat{y}}"
      "MLoutput": "\\hat{y}"
      "outputs": "\\boldsymbol{y}"
      "inputs": "\\boldsymbol{x}"
      "targets": "\\boldsymbol{t}"
      "weights": "\\boldsymbol{w}"
      "testoutputs": "\\boldsymbol{y}^\\odot"
      "testinputs": "\\boldsymbol{x}^\\odot"
      "output": "y"
      "inputt": "x"
      "target": "t"
      "weight": "w"
      "testoutput": "y^\\odot"
      "MLtestoutput": "\\hat{y}^\\odot"
      "testinput": "x^\\odot"
      "trainingdata": "\\mathcal{T}"
      "LaTeX": "\\text{LaTeX}"
      "residual": "\\epsilon"
      "residuals": "\\boldsymbol{\\epsilon}"
      "zeros": "\\boldsymbol{0}"
      "covres": "\\boldsymbol{\\Sigma_{\\epsilon}}"
      "covpars": "\\boldsymbol{\\Sigma_{\\pars}}"
      "tildecovpars": "\\boldsymbol{\\widetilde{\\Sigma}_{\\pars}}"
      "sigmas": "\\boldsymbol{\\sigma}"
      "sigmai": "\\sigma_i"
      "sigmares": "\\sigma_{\\epsilon}"
      "cbar": "\\bar c"
      "Lra": "\\Longrightarrow"
      "yth": "y_{\\text{th}}"
      "yexp": "y_{\\text{exp}}"
      "ym": "y_{\\text{m}}"
      "thetavec": "\\pars"
      "parsLR": "\\boldsymbol{\\beta}"
      "paraLR": "\\beta"
      "covparsLR": "\\boldsymbol{\\Sigma_{\\parsLR}}"
      "optparsLR": "\\parsLR^*"
      "optparaLR": "\\paraLR^*"
      "tildecovparsLR": "\\boldsymbol{\\widetilde{\\Sigma}_{\\parsLR}}"
    }
  }
});
