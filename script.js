function Logo(){
    return<img src="./images/ironhack-logo-xs.png"></img>
}

function Burger(){
    return<img src="./images/menu-top-xs.png" id="burger"></img>
}

function Nav(){
    return (
        <div class="nav">
            <Logo/>
            <Burger/>
        </div>
    )
}

function Title(){
    return <h1>Say Hello to ReactJS</h1>
}

function Description(){
    return <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</p>
}

function Btn(){
    return <h2 class="btn">Awesome!</h2>
}


function Header(){
    return (
        <div class="div">
            <Nav/>
            <Title />
            <Description />
            <Btn />
        </div>

    )
}



function CardImg1(){
    return <img src="./images/icon1.png"></img>
}

function CardTitle1(){
    return <h2>Declarative</h2>
}

function CardDescription1(){
    return <p>dfakjdfasjkdfhalksjdhf</p>
}


function Card1(){
    return (
        <div>
            <CardImg1/>
            <CardTitle1/>
            <CardDescription1/>
        </div>
    )
}

function CardImg2(){
    return <img src="./images/icon2.png"></img>
}

function CardTitle2(){
    return <h2>Declarative</h2>
}

function CardDescription2(){
    return <p>dfakjdfasjkdfhalksjdhf</p>
}


function Card2(){
    return (
        <div>
            <CardImg2/>
            <CardTitle2/>
            <CardDescription2/>
        </div>
    )
}


function CardImg3(){
    return <img src="./images/icon3.png"></img>
}

function CardTitle3(){
    return <h2>Declarative</h2>
}

function CardDescription3(){
    return <p>dfakjdfasjkdfhalksjdhf</p>
}

function Card3(){
    return (
        <div>
            <CardImg3/>
            <CardTitle3/>
            <CardDescription3/>
        </div>
    )
}

function CardImg4(){
    return <img src="./images/icon4.png"></img>
}

function CardTitle4(){
    return <h2>Declarative</h2>
}

function CardDescription4(){
    return <p>dfakjdfasjkdfhalksjdhf</p>
}

function Card4(){
    return (
        <div>
            <CardImg4/>
            <CardTitle4/>
            <CardDescription4/>
        </div>
    )
}

function AllCards(){
    return (
        <div class="cards">
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
        </div>
    )
}

function MyApp(){
    return (
        <div>
            <Header/>
            <AllCards/>
        </div>
    )
}


ReactDOM.render(<MyApp />, document.querySelector("#app"))