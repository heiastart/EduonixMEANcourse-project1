const animals = [
  {"id":{"$oid":"60461f6efc13ae2ea6000000"},"animal":"Painted stork","scientific name":"Mycteria leucocephala","amount":9,"location":"Philadelphia"},
  {"id":{"$oid":"60461f6efc13ae2ea6000001"},"animal":"Barbet, levaillant's","scientific name":"Trachyphonus vaillantii","amount":46,"location":"Velikooktyabr’skiy"},
  {"id":{"$oid":"60461f6efc13ae2ea6000002"},"animal":"Oryx, fringe-eared","scientific name":"Oryx gazella callotis","amount":56,"location":"Registro"},
  {"id":{"$oid":"60461f6efc13ae2ea6000003"},"animal":"Gila monster","scientific name":"Heloderma horridum","amount":8,"location":"Trashigang"},
  {"id":{"$oid":"60461f6efc13ae2ea6000004"},"animal":"Dove, laughing","scientific name":"Streptopelia senegalensis","amount":3,"location":"Seattle"},
  {"id":{"$oid":"60461f6efc13ae2ea6000005"},"animal":"Malagasy ground boa","scientific name":"Acrantophis madagascariensis","amount":12,"location":"Yako"},
  {"id":{"$oid":"60461f6efc13ae2ea6000006"},"animal":"Dunnart, fat-tailed","scientific name":"Smithopsis crassicaudata","amount":23,"location":"Arvidsjaur"},
  {"id":{"$oid":"60461f6efc13ae2ea6000007"},"animal":"Otter, african clawless","scientific name":"Aonyx capensis","amount":71,"location":"Zhize"},
  {"id":{"$oid":"60461f6efc13ae2ea6000008"},"animal":"Reindeer, South-Norway","scientific name":"Reindeer norway","amount":71,"location":"Norway"}
]

const animalElements = animals.map(animal => {
  const animalElement = document.createElement("div");
  const attributeList = document.createElement("ul");
  const idElement = document.createElement("li");
  const commonNameElement = document.createElement("li");
  const scientificNameElement = document.createElement("li");
  const amountElement = document.createElement("li");
  const locationElement = document.createElement("li");

  idElement.innerText = `Animal ID: ${animal.id.$oid}`;
  commonNameElement.innerText = `Common name: ${animal.animal}`;
  scientificNameElement.innerText = `Scientific name: ${animal["scientific name"]}`;
  amountElement.innerText = `Amount: ${animal.amount}`;
  locationElement.innerText = `Location: ${animal.location}`;

  animalElement.appendChild(attributeList);
  attributeList.appendChild(idElement);
  attributeList.appendChild(commonNameElement);
  attributeList.appendChild(scientificNameElement);
  attributeList.appendChild(amountElement);
  attributeList.appendChild(locationElement);

  return animalElement;
})

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector("#animals");
  animalElements.forEach(element => container.appendChild(element));
})