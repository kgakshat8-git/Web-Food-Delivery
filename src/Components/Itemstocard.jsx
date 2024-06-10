import Card from './Card'
function Itemstocard({item,category}){
    let ab=22;
    return(
        <div>
          { item.map(items=>(<Card data={items} > </Card>))
          
          }

        </div>
    )
}
export default Itemstocard

