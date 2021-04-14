// fake data generator
const getItems = (title,count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `${title}-${k + offset}`,
    content: `${title} ${k + offset}`
  }));

export let lists = [
    {
        _id:"fgyasd1672355671234asdghj123f",
        title:"Backlogs",
        items:getItems("Backlogs",10)
    },
    {
        _id:"hjkavbsdfnmzcxghjkasdqweyut21",
        title:"InProgress",
        items:getItems("InProgress",3)
    },
    {
        _id:"eyuiwrthjksdfweryui1231231312",
        title:"Review",
        items:getItems("Review",5)
    },
]