    import useStore from "../state/cart";
    import React from "react";


    function Home() {
    const { user } = useStore();
    return (
        <div>
        <h1>Welcome to Coles Super Farm</h1>
        <h2>Crafted with Passion. Grown for Community.</h2>
        <p>
            <b>
            Welcome to Cole's super farm, where quality meets craftsmanship right at the heart of the market. What began as a simple stand offering fresh, organic oranges has grown into a vibrant destination for hand-curated goods.
            <br />
            <br />
            Whether you’re stopping by for our rich, artisanal dark chocolates, picking up fresh local produce, or cozying up in our signature custom apparel, everything we offer is thoughtfully sourced and made with care.
            <br />
            <br />
            Take a look around, explore your seasonal favorites, and bring a piece of the market home with you today!
            <br />
            <br />
            Tip: Pair this intro right below a full-width hero image (like your hoodie or market setup) with a bold "Catalog" button on the top of the screen!
            </b>
        </p>
        <HomePagePhoto />
        </div>
    );
    }
    function HomePagePhoto() {
    return (
        <img
        src="/images/home.png"
        alt="Home photo"
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginBottom: "1rem" }}
        />
    );
    }

    export default Home;