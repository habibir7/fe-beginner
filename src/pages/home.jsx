import Navigation from "../component/navigation";
import Footer from "../component/footer";
import Pancake from "../assets/pancake.jpeg"
import Sandwich from "../assets/sandwich.jpeg"
import Cake from "../assets/cake.jpeg"
import Salmon from "../assets/salmon.jpeg"
import Kare from "../assets/kare.jpeg"
import Burger from "../assets/burger.jpeg"
import Banana from "../assets/banana.jpeg"
import Salad from "../assets/salad.jpeg"
import Recipe from "../assets/recipe.jpeg"


export default function Home(){
    return(
        <>
        <Navigation />
        <div
          className="container-fluid d-flex flex-row mb-2 m-0 "
          style={{
            borderRightWidth: 250,
            borderRightStyle: "solid",
            borderRightColor: "#EFC81A"
          }}
        >
          <div className="container d-flex flex-column col-7 mb-2 m-0">
            <p
              className="p-2"
              style={{
                color: "#2E266F",
                fontSize: 45,
                marginLeft: 30,
                marginTop: 100
              }}
            >
              Discover Recipe &amp; Delicious Food
            </p>
            <input
              type="text"
              style={{ marginLeft: 30 }}
              className="form-control"
              id="Search"
              placeholder="Search menu"
            />
          </div>
          <div className="d-flex container col-3 mb-2 ">
            <img
              src={Sandwich}
              style={{
                width: 400,
                height: 400,
                marginTop: 50,
                marginLeft: 100,
                borderRadius: 10,
                borderStyle: "none"
              }}
            />
          </div>
        </div>
        <div className="container-fluid d-flex mb-2 justify-content-start m-5">
          <p
            style={{
              borderLeftWidth: 5,
              borderLeftStyle: "solid",
              fontSize: 40,
              borderLeftColor: "#EFC81A"
            }}
          >
            Popular for you !
          </p>
        </div>
        <div className="container-fluid d-flex mb-3 flex-row">
          <div className="container-fluid">
            <img
              className="m-5"
              src={Pancake}
              style={{ width: 500, height: 400 }}
              alt=""
            />
          </div>
          <div
            className="container-fluid d-flex flex-column align-items-center mt-3"
            style={{ marginRight: 200 }}
          >
            <div className="container-fluid" style={{ marginTop: 100 }}>
              <p style={{ fontSize: 40 }}>
                Healthy Bone Broth Ramen (Quick &amp; Easy)
              </p>
            </div>
            <div className="container-fluid">
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
                hurry? That`s right!
              </p>
            </div>
            <div className="container-fluid">
              <button
                type="submit"
                className="btn btn-warning "
                style={{ padding: "7px 50px 7px 50px" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex mb-2 justify-content-start m-5">
          <p
            style={{
              borderLeftWidth: 5,
              borderLeftStyle: "solid",
              fontSize: 40,
              borderLeftColor: "#EFC81A"
            }}
          >
            New Recipe
          </p>
        </div>
        <div className="container-fluid d-flex mb-3 flex-row">
          <div className="container-fluid">
            <img
              className="m-5"
              src={Burger}
              style={{ width: 500, height: 400 }}
              alt=""
            />
          </div>
          <div
            className="container-fluid d-flex flex-column align-items-center mt-3"
            style={{ marginRight: 200 }}
          >
            <div className="container-fluid" style={{ marginTop: 100 }}>
              <p style={{ fontSize: 40 }}>
                Healthy Bone Broth Ramen (Quick &amp; Easy)
              </p>
            </div>
            <div className="container-fluid">
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
                hurry? That`s right!
              </p>
            </div>
            <div className="container-fluid">
              <button
                type="submit"
                className="btn btn-warning "
                style={{ padding: "7px 50px 7px 50px" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex mb-2 justify-content-start m-5">
          <p
            style={{
              borderLeftWidth: 5,
              borderLeftStyle: "solid",
              fontSize: 40,
              borderLeftColor: "#EFC81A"
            }}
          >
            Popular Recipe
          </p>
        </div>
        <div className="container-fluid d-flex flex-column mb-3">
          <div className="container-fluid d-flex flex-row mb-2">
            <div className="container-fluid col-4" style={{ marginLeft: 20 }}>
              <img
                src={Kare}
                style={{ width: "100%", height: "70%" }}
                alt=""
              />
            </div>
            <div className="container-fluid col-4">
              <img
                src={Recipe}
                style={{ width: "100%", height: "70%" }}
                alt=""
              />
            </div>
            <div className="container-fluid col-4">
              <img
                src={Banana}
                style={{ width: "100%", height: "70%" }}
                alt=""
              />
            </div>
          </div>
          <div className="container-fluid d-flex flex-row mb-2">
            <div className="container-fluid col-4" style={{ marginLeft: 20 }}>
              <img
                src={Cake}
                style={{ width: "100%", height: "70%" }}
                alt=""
              />
            </div>
            <div className="container-fluid col-4">
              <img
                src={Salmon}
                style={{ width: "100%", height: "70%" }}
                alt=""
              />
            </div>
            <div className="container-fluid col-4">
              <img
                src={Salad}
                style={{ width: "100%", height: "70%" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <footer>
            <Footer />
        </footer>
      </>
    )
}