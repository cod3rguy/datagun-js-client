const datagun = () => console.log('test')

if (window) window.datagun = datagun

export default datagun
