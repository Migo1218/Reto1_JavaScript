let medidaMetros = 0
pulg = 0.0254

medidaMetros = Number(prompt("Ingrese medida en metros"))

convPulg = medidaMetros / pulg

document.write("la medida en pulgadas es " + Math.round(convPulg))
