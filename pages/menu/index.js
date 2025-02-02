import MenuPage from "../../components/templates/MenuPage"

function Menu({data}) {
  return (
    <MenuPage data={data}/>
  )
}

export default Menu

export async function getStaticProps (){
    const res =await fetch(`${process.env.BASE_URL}/data`) //online api
    const data = await res.json()
    // console.log(data)
    return {
        props :{data},
        revalidate : 10,
    }
    
}