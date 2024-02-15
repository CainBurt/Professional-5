window.onload = function(){
  const items_list = document.querySelectorAll(".item")
  const retailers = document.querySelectorAll('[data-type="retailer"]')
  let retailerClicked = false;
  let argosClicked = false
  let amazonClicked = false
  let currysClicked = false
  let veryClicked = false

  function hideRetailersandItems(retailerName){
    retailers.forEach(retailer =>{
      retailer.classList.remove('unavailable')
      if(!retailer.getAttribute('id').includes(retailerName)){
        retailer.classList.add('unavailable')
      }
    })
    items_list.forEach(item =>{
      item.classList.remove('unavailable')
      if(!item.getAttribute('data-shops').includes(retailerName)){
        item.classList.add('unavailable')
      }
    })
  }

  function showRetailersandItems(){
    retailers.forEach(retailer =>{
      retailer.classList.remove('unavailable')
    })
    items_list.forEach(item =>{
      item.classList.remove('unavailable')
    })
  }

  for(var i = 0; i < retailers.length; i++){
    retailers[i].addEventListener("click", function(){
      hideRetailersandItems(this.id)
      if(this.id === "amazon"){
        if(amazonClicked === true){
          showRetailersandItems()
          amazonClicked = false;
          retailerClicked = false;
        }else{
          amazonClicked = true;
          argosClicked = false;
          currysClicked = false;
          veryClicked = false;
          retailerClicked = true;
        }
        
      }
      if(this.id === "argos"){
        if(argosClicked === true){
          showRetailersandItems()
          argosClicked = false;
          retailerClicked = false;
        }else{
          argosClicked = true;
          amazonClicked = false;
          currysClicked = false;
          veryClicked = false;
          retailerClicked = true;
        }
      }
      if(this.id === "currys"){
        if(currysClicked === true){
          showRetailersandItems()
          currysClicked = false;
          retailerClicked = false;
        }else{
          currysClicked = true;
          amazonClicked = false;
          argosClicked = false;
          veryClicked = false;
          retailerClicked = true;
        }
      }
      if(this.id === "very"){
        if(veryClicked === true){
          showRetailersandItems()
          veryClicked = false;
          retailerClicked = false;
        }else{
          veryClicked = true;
          amazonClicked = false;
          argosClicked = false;
          currysClicked = false;
          retailerClicked = true;
        }
      }

    },false)
  }

  items_list.forEach(item =>{
    item.addEventListener('click', function (e){
      const itemData = JSON.parse(item.dataset.shops);
      
      if(amazonClicked === true){
        window.open(itemData["amazon"])
      }
      
      if(argosClicked === true){
        window.open(itemData["argos"])

      }
      if(currysClicked === true){
        window.open(itemData["currys"])

      }
      if(veryClicked === true){
        window.open(itemData["very"])

      }


      // modal replace data for each product
      if(retailerClicked !== true){
        if(item.id == "item-1"){
          clearRetailers()
          document.getElementById("modal-argos").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Tie-Dye Manual Kick Scooter"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/9536764?clickSR=slp:term:razor:1:11:1"
          document.getElementById("modal-image").src = "./images/products/A_Kick_TieDye_Product1.png"

          modal1.style.display = "block";
        }
        if(item.id == "item-2"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";
          document.getElementById("modal-currys").style = "display: block";
          document.getElementById("modal-very").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Crazy Cart Shift – Electric Ride-on";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-25173840-Crazy-Cart-Shift/dp/B07TNTVNKP/ref=sr_1_1?crid=3KNL8AB37MJWT&keywords=crazy+cart+shift&qid=1669126732&sprefix=crazy+cart+shift%2Caps%2C77&sr=8-1"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/7860456?clickSR=slp:term:razor:11:11:2"
          document.getElementById("modal-currys").href = "https://www.currys.co.uk/products/razor-crazy-cart-shift-kids-electric-rideon-vehicle-blue-10231841.html?searchTerm=crazy%20cart"
          document.getElementById("modal-very").href = "https://www.very.co.uk/razor-crazy-cart-shift-12-volt/1600468722.prd?Ntt=razor"

          document.getElementById("modal-image").src = "./images/products/CrazyCart_Shift_BL_BK_Product_without_flag.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-3"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";
          document.getElementById("modal-currys").style = "display: block";
          document.getElementById("modal-very").style = "display: block";

          document.getElementById("modal-title").innerHTML = "MX125 Black / Pink – Electric Dirt Bike";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/s?k=mx125+dirt+rocket&crid=E8VCYVFCDR4W&sprefix=mx125+dirt+rocket%2Caps%2C71&ref=nb_sb_noss_2"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/1307984/?clickOrigin=searchbar:productdetails:sku:1307984"
          document.getElementById("modal-currys").href = "https://www.currys.co.uk/products/razor-dirt-rocket-mx125-electric-kids-motorbike-black-10234622.html?q=mx125"
          document.getElementById("modal-very").href = "https://www.very.co.uk/e/q/mx125.end?_requestid=219318"

          document.getElementById("modal-image").src = "./images/products/MX125_BK_360_4456_transparant.png"
          modal1.style.display = "block";
        }
        if(item.id == "item-4"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";
          document.getElementById("modal-very").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Sonic Glow – Kids Electric Scooter";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-Sonic-Electric-Scooter-1183030/dp/B09X3JHMGC/ref=sr_1_24?crid=5ELX1AWR02L4&keywords=razor+scooter&qid=1669126063&sprefix=razor+%2Caps%2C88&sr=8-24"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/1187953?clickSR=slp:term:razor:10:11:1"
          document.getElementById("modal-very").href = "https://www.very.co.uk/razor-sonic-glow-bluetooth-12-volt-scooter/1600781075.prd?Ntt=razor"

          document.getElementById("modal-image").src = "./images/products/SonicGlow_ES_BK_Product.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-5"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";
          document.getElementById("modal-currys").style = "display: block";
          document.getElementById("modal-very").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Riprider Lightshow – Pedal Powered Ride-on";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-RipRider-Lightshow-Black-Size/dp/B09JZVTHCF/ref=sr_1_1?crid=3IZZ9EFLQPSWJ&keywords=riprider+lightshow&qid=1669126489&sprefix=riprider+lightshow%2Caps%2C58&sr=8-1"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/1308127/?clickOrigin=searchbar:productdetails:sku:1308127"
          document.getElementById("modal-currys").href = "https://www.currys.co.uk/products/razor-turbo-a-kids-tricycle-black-label-10231845.html"
          document.getElementById("modal-very").href = "https://www.very.co.uk/razor-lightshow-rip-rider-360/1600595079.prd?Ntt=razor"

          document.getElementById("modal-image").src = "./images/products/RipRider360_Lightshow_BK_Product.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-6"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";
          document.getElementById("modal-currys").style = "display: block";
          document.getElementById("modal-very").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Powerwing Lightshow – Manual Ride-on";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-PowerWing-Lightshow-Caster-Scooter/dp/B09K5LFC3S/ref=dp_fod_1?pd_rd_w=x3cBS&content-id=amzn1.sym.13315880-16ee-4073-b323-06131c48c142&pf_rd_p=13315880-16ee-4073-b323-06131c48c142&pf_rd_r=R9E88ZGBFATKWJC906KC&pd_rd_wg=buCPE&pd_rd_r=55a0b123-ccb9-4c33-8012-5aec003571e6&pd_rd_i=B09K5LFC3S&psc=1"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/1308062/?clickOrigin=searchbar:productdetails:sku:1308062"
          document.getElementById("modal-currys").href = "https://www.currys.co.uk/products/razor-powerwing-lightshow-threewheel-scooter-black-and-blue-10231846.html"
          document.getElementById("modal-very").href = "https://www.very.co.uk/razor-lightshow-powerwing/1600595078.prd?Ntt=razor"

          document.getElementById("modal-image").src = "./images/products/PowerWing_Lightshow_BK_Product.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-7"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";
          document.getElementById("modal-currys").style = "display: block";


          document.getElementById("modal-title").innerHTML = "Ripstik Ripster Lightshow – Manual Casterboard";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-Ripstik-Ripster-Lightshow-Black/dp/B09JZSFZX7/ref=sr_1_1?crid=2UPXBGSI6E7YE&keywords=ripster+lightshow&qid=1669126509&sprefix=ripster+lightshow%2Caps%2C60&sr=8-1"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/2024747?clickSR=slp:term:razor:7:11:1"
          document.getElementById("modal-currys").href = "https://www.currys.co.uk/products/razor-ripstik-ripster-lightshow-caster-board-black-10231844.html?q=ripstik"

          document.getElementById("modal-image").src = "./images/products/Ripster_Lightshow_INTL_Product.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-8"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";
          document.getElementById("modal-currys").style = "display: block";
          document.getElementById("modal-very").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Powercore S85 – Electric Scooter";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-Power-Core-Electric-Scooter/dp/B08PPTKYP9/ref=sr_1_10?crid=5ELX1AWR02L4&keywords=razor+scooter&qid=1669126063&sprefix=razor+%2Caps%2C88&sr=8-10"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/9541285?clickSR=slp:term:razor:5:11:1"
          document.getElementById("modal-currys").href = "https://www.currys.co.uk/products/razor-power-core-s85-electric-scooter-blue-and-black-10231833.html"
          document.getElementById("modal-very").href = "https://www.very.co.uk/razor-powercore-s85-blue-12-volt/1600595080.prd?Ntt=razor"

          document.getElementById("modal-image").src = "./images/products/PowerCore_S85_BL_Product.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-9"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";
          document.getElementById("modal-very").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Powercore E90 – Electric Scooter";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-Power-Rechargeable-Electic-Scooter/dp/B01AHP7730/ref=sr_1_8?crid=5ELX1AWR02L4&keywords=razor+scooter&qid=1669126063&sprefix=razor+%2Caps%2C88&sr=8-8"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/8562210?clickSR=slp:term:razor:2:11:1"
          document.getElementById("modal-very").href = "https://www.very.co.uk/razor-powercore-e90-scooter-green/1600050497.prd"

          document.getElementById("modal-image").src = "./images/products/PowerCoreE90_GR_Product.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-10"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-currys").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Powercore S80 – Electric Scooter";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-Power-Core-Electric-Scooter/dp/B08PPTKWRB/ref=sr_1_25?crid=5ELX1AWR02L4&keywords=razor%2Bscooter&qid=1669126063&sprefix=razor%2B%2Caps%2C88&sr=8-25&th=1&psc=1"
          document.getElementById("modal-currys").href = "https://www.currys.co.uk/products/razor-power-core-s80-electric-scooter-black-and-green-10239065.html"

          document.getElementById("modal-image").src = "./images/products/PowerCore_S80_GR_Product.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-11"){
          clearRetailers()
          document.getElementById("modal-amazon").style = "display: block";
          document.getElementById("modal-very").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Flashback – Manual Kick Scooter";

          document.getElementById("modal-amazon").href = "https://www.amazon.co.uk/Razor-Flashback-Style-Kick-Scooter/dp/B09FLVTJM3/ref=sr_1_16?crid=5ELX1AWR02L4&keywords=razor%2Bscooter&qid=1669126063&sprefix=razor%2B%2Caps%2C88&sr=8-16&th=1&psc=1"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/1307939?clickOrigin=searchbar:search:sku:1307939"
          document.getElementById("modal-very").href = "https://www.very.co.uk/e/q/flashback-scooter.end?_requestid=219469"

          document.getElementById("modal-image").src = "./images/products/Flashback_BL_Product.png"
          modal1.style.display = "block";
        }

        if(item.id == "item-12"){
          clearRetailers()
          document.getElementById("modal-currys").style = "display: block";
          document.getElementById("modal-argos").style = "display: block";

          document.getElementById("modal-title").innerHTML = "Pocket Mod Petite – Electric Ride-on";

          document.getElementById("modal-currys").href = "https://www.currys.co.uk/products/razor-pocket-mod-petite-electric-rideon-scooter-blue-and-white-10231837.html"
          document.getElementById("modal-argos").href = "https://www.argos.co.uk/product/1308017/?clickOrigin=searchbar:productdetails:sku:1308017"

          document.getElementById("modal-image").src = "./images/products/PocketMod_Petite_Product.png"
          modal1.style.display = "block";
        }
      
      }
    })
  })


  
    // ---------Modal -------------
  function clearRetailers(){
    document.getElementById("modal-amazon").style = "display: none";
    document.getElementById("modal-argos").style = "display: none";
    document.getElementById("modal-currys").style = "display: none";
    document.getElementById("modal-very").style = "display: none";
  }
  
  let modal1 = document.getElementById("modal-1");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal1.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

  // ---------Parralax Effect-------------
  var rellax = new Rellax('.rellax');

}


