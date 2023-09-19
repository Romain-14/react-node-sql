import Text from "./Text";

function Wrapper({title, image, text}) {

    return (
        <article>
            <h3>{title}</h3>
            
            <img src={image} alt="" />
            {
                Object.values(text).map((t, index) => {
                    return <Text text={t} key={index}/> 
                })
            }
            
        </article>
    );
}

export default Wrapper;
