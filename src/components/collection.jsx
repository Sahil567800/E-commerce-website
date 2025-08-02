import { useEffect, useState, useContext } from "react"
import Product from "./product"
import productContext from "./context"
export const Collection = () => {
    const {products,addToCart} = useContext(productContext)
    const [collection, setCollection] = useState(products)
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [PriceOrder,setPriceOrder] = useState([])
   const handlePriceChange=()=>{
      const ascending = [...products].sort((a,b)=>{
        const priceA = parseInt(a.price)
        const priceB = parseInt(b.price)
        return priceA -priceB
      })
      console.log(ascending)
      const descending = [...products].sort((a,b)=>{
        const priceA = parseInt(a.price)
        const priceB = parseInt(b.price)
        return priceA -priceB
      })
      console.log(descending)
    }
    useEffect(() => {
        setCollection(products)
    },[products])
  
     useEffect(() => {
    if (category.length === 0 && subCategory.length ===0) {
      // No filter: show all
      setCollection(products);
    } else {
      // Filter by category
      const newFiltered = products.filter((item) =>{ 
      const matchedCategories = category.includes(item.category)
      const matchedSubCategories = subCategory.includes(item.subCategory)
      return matchedCategories || matchedSubCategories
    }
      );
   
      setCollection(newFiltered);
      console.log('newFilter',newFiltered)
      console.log('category',category)
      console.log('subcategory',subCategory)
    }
    
  }, [category, products,subCategory]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) => 
        {return prev.includes(value) ? prev.filter(v => v !== value) // remove
        : [...prev, value]} // add
    );
   
  };

  const toggleSubCategory = (e)=>{
    const value = e.target.value;
    setSubCategory((prev)=>{return prev.includes(value)?prev.filter(item => item !== value):[...prev,value]})
  }
   

    return (
        <>
            <section id='collection' className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="left-sec ">
                                <div className="filter">
                                    <h2>Filters</h2>
                                    <div className="category my-2">
                                        <h5>Category</h5>
                                        <div className="checkbox">
                                            <input type="checkbox" onChange={toggleCategory}
                                            
                                            value={'MEN'} />
                                            <label htmlFor="Men">Men</label>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" onChange={toggleCategory}
                                                 value={'WOMEN'} />
                                            <label htmlFor="Women">Women</label>
                                        </div>
                                    </div>
                                    <div className="subcategory my-2">
                                        <h5>SubCategory</h5>
                                        <div className="checkbox">
                                            <input type="checkbox" value={'CLOTHES'} 
                                            onChange={toggleSubCategory} />
                                            <label htmlFor="CLOTHES">Clothes</label>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" onChange={toggleSubCategory}
                                             value={'SHOES'}  />
                                            <label htmlFor="Men">Shoes</label>
                                        </div>
                                    </div>
                                    <div className="price my-2">
                                        <select name="price" id="price" onChange={handlePriceChange}>
                                            <option value="default">Default Price</option>
                                            <option value="lowest">Lowest to Highest</option>
                                            <option value="highest">Highest to Lowest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="right-sec">
                                <div className="row"> <h1 className="my-3">Collection</h1></div>
                                <div className="row">
                                    {collection.map((item) => {
                                        return <Product key={item.id} add={()=>addToCart(item)} id={item.id} title={item.title} img={item.img} price={item.price} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}