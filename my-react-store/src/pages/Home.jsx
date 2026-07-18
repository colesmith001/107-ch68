import useStore from "../state/cart";

function Home (){
    const {user} = useStore();
    return(
    <div>
        <h1>Welcome to my online store</h1>
        <p>Hello I am {user.name} and my cohort is {user.cohort}</p>
    </div>
    )
}

export default Home;