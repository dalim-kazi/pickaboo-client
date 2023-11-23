
  const Description = ({products}) => {
    return (
        <>
            <div className="mx-5">
                <p className="text-xl font-semibold mb-5 mt-10">PRODUCT DETAILS</p>
                <p>Experience style and ease like never before, courtesy of Hush Puppies. Introducing the latest innovation in mens leather footwear by Hush Puppies – the Open Back Half-Moccasin Shoe. This premium creation seamlessly blends style and comfort, making it the ultimate choice for the modern man on the move. Crafted with meticulous attention to detail, these genuine leather shoes exude the timeless charm of a casual loafer while offering the ease of slip-on design with an open back. The result is a footwear masterpiece that effortlessly combines sophistication and convenience. Made from high-quality leather, Hush Puppies Open Back Half-Moccasin Shoe offers exceptional durability and comfort, ensuring your feet feel pampered all day long. The expertly designed cushioned insole provides superior support, making these shoes perfect for both casual outings and semi-formal occasions.</p>
                <ul className="list-disc mb-5">
                    <p>FEATURES:</p>
                    <li>Type: {products.tittle}</li>
                    <li>Gender : {products.gender}</li>
                    <li>Color : {products.color}</li>
                    <li>Band : { products.brand}</li>
                    <li>Upper Material : {products.subCategory}</li>
                     
                </ul>
                <p>STYLE TIPS: Heading out for a weekend getaway? These leather shoes are perfect for pairing with your favorite khaki shorts and a comfortable polo shirt, striking the ideal balance between relaxation and style.</p>
        </div>
        </>
    );
 };
 
 export default Description;