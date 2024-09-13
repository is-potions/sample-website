import React from "react";

export default function AboutUs() {
    return (
        <div id="menu">
                <section class="section">
                    <div className="box-main">
                        <div class="firstHalf">
                            <h1 class="text-big">
                                About Us:
                            </h1>
                            <p class="text-small">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                            <h1 class="text-big">
                                Bestsellers:
                            </h1>
                            <p class="text-small">
                                <div class="food-list">
                                    <div class="food-indiv">
                                        <img src= "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"/><br></br>
                                        Carbonara
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                            <h1 class="text-big">
                                Where Can You Contact Us?
                            </h1>
                            <p class="text-small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Integer ut mi sit amet tellus tincidunt congue. In eget 
                            tincidunt arcu. Pellentesque lacinia quam eu venenatis lacinia. 
                            Pellentesque sed congue metus, quis pretium nibh. Maecenas eu condimentum purus. 
                            Morbi mollis, nisl vel mattis scelerisque, augue libero porta velit, 
                            elementum finibus justo. 
                            
                            </p>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <p className="text-footer">
                        Copyright ©-All rights are reserved (maybe)
                    </p>
                </footer>
            </div>
    );
}