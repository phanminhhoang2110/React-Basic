import React, {Component} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardBody, Container, Row, Col
} from 'reactstrap';
import {CartContext} from "../../context/cart"

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [{
                "id": "40fa24fa-c0fa-44c2-8bbe-613e5ae5efa6",
                "name": "Lamb - Racks, Frenched",
                "description": "justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "c851e509-7be4-462d-891a-f7f25b49f2b8",
                "name": "Sour Cream",
                "description": "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "e7fbdf1c-a9b1-4e5e-ada7-03d31caa4b27",
                "name": "Bread - Malt",
                "description": "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "7d8de956-e775-4287-b4e7-2db3b970a438",
                "name": "Sauce - Vodka Blush",
                "description": "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "40539e57-6696-42dd-8c9d-ff724a3f05fe",
                "name": "Chick Peas - Dried",
                "description": "sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "0a489002-fb10-4e1c-97ec-97f308eec57c",
                "name": "Soup - Beef Conomme, Dry",
                "description": "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "04353485-8f2d-4083-8adb-96f97c8e7a2b",
                "name": "Chick Peas - Dried",
                "description": "at velit eu est congue elementum in hac habitasse platea dictumst morbi",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "9f6f0cd0-8260-476e-a836-59e153c07300",
                "name": "Jam - Marmalade, Orange",
                "description": "morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "16fc74dc-38f1-41aa-8d2e-bb27ff1feac6",
                "name": "Pastry - Raisin Muffin - Mini",
                "description": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "f4c203bd-919d-4987-afbd-57de5e03a298",
                "name": "Salt - Celery",
                "description": "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "0469a4ad-b4f9-47b5-9e66-cfb4a2bcd823",
                "name": "Salmon - Canned",
                "description": "tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "994921af-3e4b-499a-a9d5-8d022b35cf9b",
                "name": "Tomatoes - Diced, Canned",
                "description": "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "21d57a41-2a03-47ef-a43c-187d3b77604d",
                "name": "Tea - Lemon Green Tea",
                "description": "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "d9dc0093-5c6f-4d79-b02e-9f2bdd7d9145",
                "name": "Crab - Claws, Snow 16 - 24",
                "description": "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "13decad2-8a59-4276-aa19-0ca80ee9b9c1",
                "name": "Mints - Striped Red",
                "description": "amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "3898e9cb-698a-4518-ab2c-8843392af209",
                "name": "Macaroons - Homestyle Two Bit",
                "description": "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "a24b653c-47c7-4ab9-8384-45965217b07d",
                "name": "Wine - Lamancha Do Crianza",
                "description": "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "2856f970-e58d-4bb6-a546-6536864ea848",
                "name": "Salt - Sea",
                "description": "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "360d0483-a347-4ce2-a5ab-dd2d8c611572",
                "name": "Brandy - Bar",
                "description": "ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "3c3c2741-3d04-4988-94b4-ce4457202ce1",
                "name": "Sloe Gin - Mcguinness",
                "description": "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "bad7a67d-66cb-428c-aaf7-25ccec7771c3",
                "name": "Pepper Squash",
                "description": "posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "2bff6579-a855-4a42-a5ab-f1f30ff07454",
                "name": "Flour - Pastry",
                "description": "sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "f5832c73-23ff-49e5-820e-5e8695f8fcb2",
                "name": "Shrimp - Black Tiger 6 - 8",
                "description": "vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "b33e20de-1df1-4c7f-a8d1-e6c0a9d17d28",
                "name": "Nut - Pistachio, Shelled",
                "description": "enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "0a430067-f3a2-48aa-87ca-72cb38c1bfb6",
                "name": "Beer - Mcauslan Apricot",
                "description": "eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "0b794f79-d5db-4e86-b773-048fcec05e9d",
                "name": "Container - Clear 16 Oz",
                "description": "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "5fb16448-94cd-4e79-887f-ec53d6e042fd",
                "name": "Cinnamon - Stick",
                "description": "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "df19c0f6-3429-44fb-9846-c77900bae1c8",
                "name": "Sherry - Dry",
                "description": "tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "7553b98a-8817-4e41-9584-8c794bb3ea79",
                "name": "Lid Coffeecup 12oz D9542b",
                "description": "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "1c8e56d6-fe9c-41b8-852b-5ef408f67aab",
                "name": "Syrup - Monin, Swiss Choclate",
                "description": "convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "ce745a84-6d0b-4a52-b275-ccb390bb5857",
                "name": "Green Scrubbie Pad H.duty",
                "description": "iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "1c9a9e09-6a0e-4467-9eb9-e58a84a93249",
                "name": "Mushroom - Shitake, Fresh",
                "description": "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "a1f27724-c653-4604-90cb-5a95be9e0b9f",
                "name": "Sugar - White Packet",
                "description": "suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "77a97079-69af-4143-8aa7-ee1cab1f3441",
                "name": "Bread - Rye",
                "description": "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "a431f62a-7655-4c1c-9e43-561f9b69a5a9",
                "name": "Chinese Foods - Thick Noodles",
                "description": "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "9cfc7dc1-b84b-46ee-b70c-8030b9ec5cbd",
                "name": "Appetiser - Bought",
                "description": "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "64dd84af-f949-457c-b14f-27910d6a52d2",
                "name": "Bread - Italian Sesame Poly",
                "description": "velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "bb6df9e8-6b83-4fdc-a24a-ec11822bd94d",
                "name": "Long Island Ice Tea",
                "description": "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "87346781-2fc3-4ca7-a471-2ba8a627abab",
                "name": "Water, Tap",
                "description": "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "5199613b-b748-4243-a185-fecdb285e239",
                "name": "Clam Nectar",
                "description": "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "0ecbe4a6-2289-4e85-b5f8-4b2c899b6b71",
                "name": "Parsnip",
                "description": "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "eeee195f-bbf1-4fff-8b18-a450332e3c2e",
                "name": "Wine - Rosso Toscano Igt",
                "description": "in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "38dbf73e-1d2c-4f7a-924d-41ca56bca3df",
                "name": "Crab - Back Fin Meat, Canned",
                "description": "nunc vestibulum ante ipsum primis in faucibus orci luctus et",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "0e2bfb06-095c-4445-b907-d09fb6d7b40a",
                "name": "Spice - Montreal Steak Spice",
                "description": "urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "a617f7c1-fc63-4b39-8b91-49ec58c91e5f",
                "name": "Ham - Cooked Bayonne Tinned",
                "description": "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "b258dcf9-db87-4a4e-8a7f-04b70e9b20e2",
                "name": "Lentils - Green Le Puy",
                "description": "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "692252ad-b9ec-4ffe-bbc9-dd29ec47f0fa",
                "name": "Cucumber - Pickling Ontario",
                "description": "posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "b71d01fd-eb56-450e-b896-5de62625c152",
                "name": "Extract Vanilla Pure",
                "description": "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "b44d66b9-7a11-431c-824d-e75978569333",
                "name": "Pepper - Green",
                "description": "in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "d5da915c-b31a-4d4d-874b-a5b8d4bd7f47",
                "name": "Chocolate - Milk",
                "description": "ipsum aliquam non mauris morbi non lectus aliquam sit amet",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "c460de46-2786-423c-9c81-adccb9f85fbc",
                "name": "Rum - Light, Captain Morgan",
                "description": "luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "1f8817c6-724b-4da5-a6fe-743fdd0515be",
                "name": "Lettuce - Spring Mix",
                "description": "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "a3e24b2a-cace-4bab-a4be-8827b4462e81",
                "name": "Salmon - Fillets",
                "description": "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "635442c8-2e7a-4a7d-962d-36cb97f4d77a",
                "name": "Horseradish - Prepared",
                "description": "nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "9bce3a85-479f-4234-9bf0-29486095a72f",
                "name": "Carbonated Water - Cherry",
                "description": "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "88c09918-7d8f-4e68-914a-b27305b5b7fc",
                "name": "Oxtail - Cut",
                "description": "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "fcae130b-4319-4122-bda0-78b406c9d6d7",
                "name": "Marjoram - Fresh",
                "description": "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "622bea01-16ef-4cdb-97b0-e1cb909ca125",
                "name": "Pasta - Fettuccine, Egg, Fresh",
                "description": "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "79e56450-4c27-4151-bf5a-f3fddd716f5f",
                "name": "Dr. Pepper - 355ml",
                "description": "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "664393ce-fbcc-4abb-88b9-c1ae2bdf19f9",
                "name": "Wine - Magnotta - Pinot Gris Sr",
                "description": "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "bdb9236f-17e7-472c-afb6-d0e2a233b00b",
                "name": "Turnip - White",
                "description": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "3a317131-d516-4a6b-bf79-7b6aafd257ee",
                "name": "Chocolate - Milk Coating",
                "description": "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "6e2f3851-53df-42e5-b218-01e4d5594279",
                "name": "Soup - Campbells",
                "description": "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "0fdf71ff-ea78-42c6-89c8-faa539b3abd3",
                "name": "V8 - Tropical Blend",
                "description": "nullam porttitor lacus at turpis donec posuere metus vitae ipsum",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "59bc8aab-bc27-4eb8-9ffd-e7e94a721a7c",
                "name": "Zucchini - Green",
                "description": "amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "209fa521-3de9-4916-bb9e-e1c9e8b42dc1",
                "name": "Rice Wine - Aji Mirin",
                "description": "a libero nam dui proin leo odio porttitor id consequat",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "9ee88cf8-80cd-4e5f-b612-2f6edd34495b",
                "name": "Hog / Sausage Casing - Pork",
                "description": "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "f457253e-1d20-46fb-9ac2-6a24d29f790a",
                "name": "Tomato Puree",
                "description": "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "3b0a930e-f3af-4c3d-b774-2bb8b5577b36",
                "name": "Ecolab - Medallion",
                "description": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "1eb749ad-892c-4da2-b4ce-513631b7baa1",
                "name": "Strawberries - California",
                "description": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "fb7f7571-e682-4f0c-a3cd-c0e843a8b49d",
                "name": "Wine - Savigny - Les - Beaune",
                "description": "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "505ef087-49f3-441a-9929-39472960a184",
                "name": "Towel Dispenser",
                "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "674ed7c9-7ee0-4273-94ea-ec8710358853",
                "name": "Pastry - Apple Muffins - Mini",
                "description": "accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "d18cd793-9c6b-4b5b-b776-b5ade4174d76",
                "name": "Scampi Tail",
                "description": "mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "1a99403b-23b5-418a-a09a-fc84aa1c9364",
                "name": "Juice - Orange 1.89l",
                "description": "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "7409e0ee-4b22-4946-b852-8280e51306f6",
                "name": "Cheese - Brie Roitelet",
                "description": "vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "777a1f9b-18d7-4896-b26c-e0f7164f606a",
                "name": "Bread Bowl Plain",
                "description": "gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "ecf454f1-8934-4458-bfec-f0d56be15595",
                "name": "Gherkin",
                "description": "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "3139dfef-81bb-43d5-ba31-e659f38cb8b2",
                "name": "Cheese - Gorgonzola",
                "description": "fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "19b51b40-d318-4da8-8b75-d4b3b2637e7a",
                "name": "Pail With Metal Handle 16l White",
                "description": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "64d0ef1c-76b1-4518-b0b6-8647f67eb7f2",
                "name": "Sauce - Hp",
                "description": "curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "05a26484-c00e-46c8-841e-ad08c8a18d48",
                "name": "Basil - Pesto Sauce",
                "description": "libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "90d1ceac-1397-4713-9a9b-3643e0bf9182",
                "name": "Juice - Ocean Spray Cranberry",
                "description": "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "49e453d3-d901-4b99-b224-7aca8e5f59bf",
                "name": "Goldschalger",
                "description": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "92e2139b-d781-4cd3-a8a5-3c6b46f556b2",
                "name": "Tart Shells - Sweet, 3",
                "description": "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "e9fd40cc-317e-42e3-8a0c-30592572f199",
                "name": "Oil - Cooking Spray",
                "description": "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "f7a46810-7c29-4709-9ac8-6758c367c5e6",
                "name": "Chicken - Tenderloin",
                "description": "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "633f262e-a689-47b0-87d8-98f08d20f9f3",
                "name": "Appetizer - Asian Shrimp Roll",
                "description": "donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "67ef9991-9daa-4e7f-85d1-636314c52f2c",
                "name": "Beer - Rickards Red",
                "description": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "a03496ad-30ba-4b1d-8fad-fb6c9b741bf1",
                "name": "Wine - Red, Wolf Blass, Yellow",
                "description": "et tempus semper est quam pharetra magna ac consequat metus sapien ut",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "81b43322-a472-47a6-a9f3-85daa609e765",
                "name": "Vaccum Bag - 14x20",
                "description": "sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "b3aa4343-aadf-435b-879c-ce114ac6be37",
                "name": "Wine - White, Riesling, Semi - Dry",
                "description": "ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien",
                "img": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "752cf7e4-f78c-4693-8527-c5004d17d019",
                "name": "Vacuum Bags 12x16",
                "description": "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "d4a72ac6-c5d8-4816-a597-bd43bbd36d14",
                "name": "Pastry - Cherry Danish - Mini",
                "description": "ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "a6b16ba4-c3cf-4513-80c7-c0e62e46011e",
                "name": "Wine - Gewurztraminer Pierre",
                "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "f38ac039-d250-40f2-8009-4cd9b3f5bae9",
                "name": "Ecolab - Medallion",
                "description": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
                "img": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "ef96ebc0-cc60-4e44-911c-85f588801e3f",
                "name": "Petite Baguette",
                "description": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "c46c8871-0a94-4112-baba-aba75cbde311",
                "name": "Water - Mineral, Carbonated",
                "description": "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "aa11b011-e167-4e32-8e6f-24500c81a363",
                "name": "Lid Coffeecup 12oz D9542b",
                "description": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
                "img": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "2cddba98-21f8-4ad4-83b8-58d77d09985d",
                "name": "Melon - Watermelon, Seedless",
                "description": "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
                "img": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }]
        }
    }

    render(){
        const {products} = this.state;
        return (            
            <Container>
            <h1>Product</h1>
              <Row>
                {products.map(product=>(
                  <Col sm={3}>
                  <Card>
                    <CardImg top width="100%" src={product.img} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">{product.name}</CardTitle>
                      <CardText>{product.description}</CardText>
                        <CartContext.Consumer>
                          {({addToCart})=> <Button onClick={()=>addToCart(product)}> Mua </Button>}
                        </CartContext.Consumer>  
                    </CardBody>
                  </Card>
                  </Col>
                ))}
              </Row>
            </Container>
        );
    }
}

export default Products; 