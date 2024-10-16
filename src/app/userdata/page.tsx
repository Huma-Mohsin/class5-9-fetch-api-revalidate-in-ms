{/**
The cache: "revalidate" option is used in Next.js to control caching behavior for pages generated with Incremental Static Regeneration (ISR). 


Benefits of Using revalidate

Improved User Experience: Users see fast-loading static pages while the content is updated in the background.

Reduced Server Load: Instead of generating a new page on every request, Next.js can serve cached versions and only regenerate them based on the specified interval.

Flexibility: You can adjust the revalidation time according to how often your data changes, providing control over the freshness of content.

Conclusion

Use cache: "revalidate" when you want a balance between performance and data freshness, especially for content that changes frequently but does not require immediate updates for every user request. This feature is particularly beneficial for dynamic content, such as blog posts, product listings, or user-generated content, where some delay in updates is acceptable.






 */}

 async function Userdata(){
    const url="https://jsonplaceholder.typicode.com/users";
    const fetchdata=await fetch (url,{next:{revalidate:3000}});
    const response=await fetchdata.json();
    console.log(response[5].username);
    return (
<div>
<h1 style={{color:"blue",fontSize:"50px",fontWeight:"bold",textAlign:"center",padding:"20px",margin:"20px"}}>Data Integration</h1>
        
        
        
        {/*<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{JSON.stringify(response,null,2)}</h1 >*/}

        <br/>

<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[1].username}</h1 >
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[6].company.bs}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[9].phone}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[5].address.suite}</h1 >
</div>

)
 }
export default Userdata