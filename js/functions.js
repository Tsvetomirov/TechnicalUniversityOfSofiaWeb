/*--------------------------------------------

            Intersection-observer

---------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {

const images = document.querySelectorAll('.js-lazy-image');
    function onIntersection(entries) {
      // Loop through the entries
      entries.forEach(entry => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
    
          // Stop watching and load the image
          observer.unobserve(entry.target);
          preloadImage(entry.target);
        }
      });
    }
    
    const config = {
  // If the image gets within 50px in the Y axis, start the download.
  rootMargin: '50px 0px',
  threshold: 0.01
};

// The observer for the images on the page
let observer = new IntersectionObserver(onIntersection, config);
  images.forEach(image => {
    observer.observe(image);
  });
});
  
  

/*--------------------------------------------

            JAVASCRIPT FUNCTIONS

---------------------------------------------*/
window.onload = function mainFunctions(){


/*-------------------------------------------
                Drop Down Menu
-------------------------------------------*/
    document.getElementById("navigation-collapse").addEventListener("click",function(){
        
    var currentState = document.getElementById("nav").classList.contains("open");
    if(currentState){
        
        document.getElementById("nav").classList.remove("open");
        
        
    }else{
        
        
        document.getElementById("nav").classList.add("open");
    }




    });
    
    if(document.getElementsByClassName('fontToFit')){
        const elems = document.getElementsByClassName('fontToFit');
        for (let i = 0;i < elems.length; i++) {
            if (elems[i].scrollHeight === 0) {
               continue; 
            }else{
                let fontSize = parseInt(window.getComputedStyle(elems[i]).fontSize);
                let elemHeight = elems[i].scrollHeight;
                let allowedHeight = elems[i].clientHeight;
                let elemWidth = elems[i].scrollWidth;
                let allowedWidth = elems[i].clientWidth;
                if (elemHeight > allowedHeight || elemWidth > allowedWidth) {
                    while (elemHeight > allowedHeight || elemWidth > allowedWidth) {
                        let elemHeight = elems[i].scrollHeight;
                        let elemWidth = elems[i].scrollWidth;
                        if (elemHeight > allowedHeight || elemWidth > allowedWidth) {
                            fontSize -= 1;
                            elems[i].style.fontSize = fontSize+"px";
                        }else{
                            break;
                        }
                    }
                }
            }
        }
    }
    
    
/***********************************
 * 
 * 
 *          Slider Main Page
 * 
 * 
************************************/
document.getElementById('button_right').addEventListener('click',function(){
    let eachSlide = this.parentNode.parentNode.getElementsByClassName('slider');
    let sliderMiniPictures = document.getElementsByClassName("slider_pictures");
    let maxSlides = eachSlide.length;
    var currentSlide = 0;
    var nextSlide = 0;
    
    for (let i = 0; i < maxSlides; i++) {
        if(eachSlide[i].classList.contains('active')){
            currentSlide = i;
            nextSlide = i+1;
        }
    }
    if (nextSlide >= maxSlides || nextSlide < 0) {
        nextSlide = 0;
    }
    for(let i = 0; i < maxSlides; i++){
        if (parseInt(eachSlide[i].getAttribute('data-image_id')) === nextSlide) {
            eachSlide[i].classList.add('active');
            eachSlide[i].style.animation = "fadein 0.5s";
            document.getElementsByClassName("bg-img")[0].style.animation = "fadein 1s";
            document.getElementsByClassName("bg-img")[0].style.backgroundImage = "url("+eachSlide[i].getElementsByTagName('img')[0].getAttribute('src')+")";
        }else{
            eachSlide[i].classList.remove('active');
        }
        if (parseInt(sliderMiniPictures[i].getAttribute('data-image_id')) === nextSlide) {
            sliderMiniPictures[i].classList.add('active');
        }else{
            sliderMiniPictures[i].classList.remove('active');
        }
    }
});
document.getElementById('button_left').addEventListener('click',function(){
    //reset animation
    let eachSlide = this.parentNode.parentNode.getElementsByClassName('slider');
    let sliderMiniPictures = document.getElementsByClassName("slider_pictures");
    let maxSlides = eachSlide.length;
    var currentSlide = 0;
    var nextSlide = 0;
    
    for (let i = 0; i < maxSlides; i++) {
        if(eachSlide[i].classList.contains('active')){
            currentSlide = i;
            nextSlide = i-1;
        }
    }
    if (nextSlide >= maxSlides || nextSlide < 0) {
        nextSlide = maxSlides-1;
    }
    for(let i = 0; i < maxSlides; i++){
        if (parseInt(eachSlide[i].getAttribute('data-image_id')) === nextSlide) {
            eachSlide[i].classList.add('active');
            eachSlide[i].style.animation = "fadein 0.5s";
            document.getElementsByClassName("bg-img")[0].style.animation = "fadein 1s";
            document.getElementsByClassName("bg-img")[0].style.backgroundImage = "url("+eachSlide[i].getElementsByTagName('img')[0].getAttribute('src')+")";
        }else{
            eachSlide[i].classList.remove('active');
        }
        if (parseInt(sliderMiniPictures[i].getAttribute('data-image_id')) === nextSlide) {
            sliderMiniPictures[i].classList.add('active');
        }else{
            sliderMiniPictures[i].classList.remove('active');
        }
    }
});
};

/*------------------------------------------
                Animated Logo
-------------------------------------------*/
function slideInIcons() {
    var startHeight = document.body.getBoundingClientRect().top * (-1);
    var parents = document.getElementsByClassName('submenu');
    
            for (let i =  0; i< parents.length; i++) {
                var incr = 0.5;
                var elementInViewPort = parents[i].getBoundingClientRect().top;
                console.log(parents[i]);
                if (startHeight >= elementInViewPort) {
                    var children = parents[i].getElementsByTagName('a');
                    for (let j = 0;j < children.length; j++) {
                        if(incr >= children.length){
                            incr = children.length + 1;
                        }else{
                            incr += 0.5;
                        }
                        children[j].style.animation = "fadeSlideIn "+ incr +"s";
                    }
                }else{
                    incr = 0.5;
                    return false;
                }
            }
}

function counterMainPage(){

        /*var elementBottomPosition = document.getElementById("numbers").offsetTop;
        var elementHeight = document.getElementById("numbers"").getBoundingClientRect().height;
        var elementInViewport = elementBottomPosition - elementHeight;*/

        var counterTimer = function(){
        var startHeight = document.body.getBoundingClientRect().top * (-1);
        var elementInViewport = document.getElementById("numbers").getBoundingClientRect().top;
            //var startHeight = window.visualViewport.pageTop;
                if(startHeight >= elementInViewport){
                    animatedCounter("counter1",1200);
                    animatedCounter("counter2",1200);
                    animatedCounter("counter3",1200);
                    animatedCounter("counter4",1200);
                    window.removeEventListener("scroll",counterTimer);
                }
        };

        window.addEventListener("scroll",counterTimer);

    }



/*-------------------------------------------
                Counter
-------------------------------------------*/
function animatedCounter(id, duration){
//винаги започва от 1
    var start = 1;
// взимаме числото задедено от елемента, като крайно
    var end = document.getElementById(id).innerHTML;



    var range       = end - start;
    var current     = start;
//инкрементваме increment  докато  началната стойност т.е 1 не стигне до зададената крайна
    var increment   = end > start? 1 : -1;

    var object      = document.getElementById(id);
    var timer = setInterval(function(){
       current += increment;

       object.innerHTML = current;
       if(current == end){
           clearInterval(timer);
       }



    }, 20);

}

/*-------------------------------------------
                Turn On/Off Search
-------------------------------------------*/
function activateSearch(e,GET){
    
    var dropdown = document.getElementById("search-dropdown");
    var searchTrigger = document.getElementById("search-trigger");
    var formActive =  document.getElementById('search-field');

    if(document.querySelector("[data-search-page]").getAttribute("data-search-page") == "index_old.html"){
         if(e.currentTarget.id == "search-trigger"){
            if(formActive){
               setTimeout(() => {
                    formActive.remove();
                    document.getElementById('search-box').classList.remove('search-box--open');
               }, 1000);
                    document.getElementById('search-box').classList.add('search-box--closed');
                searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-times");
                searchTrigger.getElementsByTagName('i')[0].classList.add("fa-search");
            }else{
                
                dropdown.innerHTML = "<input id='search-field' type = 'text' name='search' onsubmit='checkForEmptySubmit(this.search.value)'/>";
                document.getElementById('search-box').classList.remove('search-box--closed');
                document.getElementById('search-box').classList.add('search-box--open');
                searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-search");
                searchTrigger.getElementsByTagName('i')[0].classList.add("fa-times");
            }
            
        }
    }else if(document.querySelector("[data-search-page]").getAttribute("data-search-page") == "staff"){
        
    if(e.currentTarget.id == "search-trigger"){
        
        if(formActive){
            
            setTimeout(() => {
                formActive.remove();
                document.getElementById('search-box').classList.remove('search-box--open');
            }, 1000);
            document.getElementById('search-box').classList.add('search-box--closed');
            searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-times");
            searchTrigger.getElementsByTagName('i')[0].classList.add("fa-search");
            
        }else{
                dropdown.innerHTML = '<input id="search-field" type="text" name="search" id="staff-search" onsubmit="checkForEmptySubmit(this.search.value)" onkeyup=\'LiveSearchStaff("/ajax/staff/staff_live_search.php","'+GET+'","search-field")\'>';
                document.getElementById('search-box').classList.remove('search-box--closed');
                document.getElementById('search-box').classList.add('search-box--open');
                searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-search");
                searchTrigger.getElementsByTagName('i')[0].classList.add("fa-times");
        
        
        }  
    }   
        
        
    }else if(document.querySelector("[data-search-page]").getAttribute("data-search-page") == "erasmus"){
        
        if(e.currentTarget.id == "search-trigger"){
        
        if(formActive){
            setTimeout(() => {
                formActive.remove();
                document.getElementById('search-box').classList.remove('search-box--open');
            }, 1000);
            document.getElementById('search-box').classList.add('search-box--closed');
            searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-times");
            searchTrigger.getElementsByTagName('i')[0].classList.add("fa-search");
            
        }else{
            
                dropdown.innerHTML = '<input id="search-field" type="text" id="erasmus-search" name="search" onsubmit="checkForEmptySubmit(this.search.value)" onkeyup = \'LiveSearchErasmus("/ajax/erasmus/erasmus_live_search.php","'+GET+'","search-field")\'>';
                document.getElementById('search-box').classList.remove('search-box--closed');
                document.getElementById('search-box').classList.add('search-box--open');
                searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-search");
                searchTrigger.getElementsByTagName('i')[0].classList.add("fa-times");
        
        
        }  
        
    }
        
        
    }else if(document.querySelector("[data-search-page]").getAttribute("data-search-page") == "courses"){
            
            
            if(e.currentTarget.id == "search-trigger"){
            if(formActive){
                setTimeout(() => {
                    formActive.remove();
                    document.getElementById('search-box').classList.remove('search-box--open');
               }, 1000);
            document.getElementById('search-box').classList.add('search-box--closed');
            searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-times");
            searchTrigger.getElementsByTagName('i')[0].classList.add("fa-search");
                
            }else{
                dropdown.innerHTML = '<input id="search-field" type="text" id="corses-search" name="search" onsubmit="checkForEmptySubmit(this.search.value)" onkeyup = \'LiveSearchCourses("/ajax/courses/courses_live_search.php","'+GET+'","search-field")\'>';
                document.getElementById('search-box').classList.remove('search-box--closed');
                document.getElementById('search-box').classList.add('search-box--open');
                searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-search");
                searchTrigger.getElementsByTagName('i')[0].classList.add("fa-times");
            
            }  
        }
        
    }else{
        if(formActive){
           setTimeout(() => {
                formActive.remove();
                document.getElementById('search-box').classList.remove('search-box--open');
           }, 1000);
                document.getElementById('search-box').classList.add('search-box--closed');
            searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-times");
            searchTrigger.getElementsByTagName('i')[0].classList.add("fa-search");
        }else{
            
            dropdown.innerHTML = "<input id='search-field' type = 'text' name='search' onsubmit='checkForEmptySubmit(this.search.value)'/>";
            document.getElementById('search-box').classList.remove('search-box--closed');
            document.getElementById('search-box').classList.add('search-box--open');
            searchTrigger.getElementsByTagName('i')[0].classList.remove("fa-search");
            searchTrigger.getElementsByTagName('i')[0].classList.add("fa-times");
        }
    }
}


/*-------------------------------------------
                Live Search
-------------------------------------------*/

var timer;
function LiveSearchCourses(url,parameters,inputElemId){


    clearTimeout(timer);
    timer = setTimeout(function(){


// get searching chars
        let searchChars = "&s="+document.getElementById(inputElemId).value;

// add them to the params

         parameters += searchChars;


        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == 4 && xhr.status == 200) {

            var responseObject = JSON.parse(xhr.responseText);


            var removeTable = document.getElementsByClassName("content-wrapper")[0].removeChild(document.getElementById("courseTable"));


//section
            let parentSect = document.getElementsByClassName("content-wrapper")[0];
//table with attributes
            let table = document.createElement("table");
            table.setAttribute("class","table table-responsive table-striped table-hover");
            table.setAttribute("id","courseTable");

//table elements
            let tBody = document.createElement("tbody");
            let th = document.createElement("th");
            let td = document.createElement("td");
            let tr = document.createElement("tr");
            let tHead = document.createElement("thead");

//TABLE
            parentSect.appendChild(table);
            table.appendChild(tHead);
            tHead.appendChild(tr);

//table header
            tr.innerHTML= "<th>Code</th><th>Subject</th><th>Name</th>";

//Table Body
            table.appendChild(tBody);



//if no results are found, terminate the function
            if(responseObject[0].errors){

                tBody.innerHTML = "<tr><td style='width:70px'></td><td>"+responseObject[0].errors+"</td><td></td></tr>";
                return;
            }




            var stringWithElements = "";
            for(var i = 0; i< responseObject.length; i++){
                stringWithElements += "<tr><td><b>"+responseObject[i].code+"</b></td><td><b><a target = '_blank' href='https://elfe.tu-sofia.bg/ELFE/Docs/"+responseObject[i].code+".pdf'>"+responseObject[i].cname+"</a></b>("+responseObject[i].option+" in semester "+responseObject[i].semester+")</td><td>"+responseObject[i].lectname+"</td></tr>";

            }


                tBody.innerHTML = stringWithElements;



        }
    };
    xhr.send(parameters);




    },800);



}


function LiveSearchErasmus(url,parameters,inputElemId){



    clearTimeout(timer);
    timer = setTimeout(function(){

        let searchChars = "&search="+document.getElementById(inputElemId).value;


         parameters += searchChars;


        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == 4 && xhr.status == 200) {



            var responseObject = JSON.parse(xhr.responseText);




            let rowElement = document.createElement("div");
            rowElement.setAttribute("class","row");
            rowElement.setAttribute("id","tableRow");
            //var removeTable = document.getElementById('course-sectionx1').removeChild(document.getElementById('boxTable'));
            
            let parentSect = document.getElementById("course-sectionx1");
            
            parentSect.appendChild(rowElement);
            //table with attributes
            // let table = document.createElement("table");
            //table.setAttribute("class","table table-responsive table-striped table-hover");
            //table.setAttribute("id","courseTable");
/*
//table elements
            let tBody = document.createElement("tbody");
            let th = document.createElement("th");
            let td = document.createElement("td");
            let tr = document.createElement("tr");
            let tHead = document.createElement("thead");


//TABLE
            parentSect.appendChild(table);
            table.appendChild(tHead);
            tHead.appendChild(tr);

//table header
            tr.innerHTML= "<th>Name</th><th>Country</th><th>Validation</th><th>Document</th>";

//Table Body
            table.appendChild(tBody);

*/



//if no results are found, terminate the function


            
            if(responseObject[0].errors){
                
                document.getElementById("tableRow").innerHTML = "<tr><td style='width:70px'></td><td>"+responseObject[0].errors+"</td><td></td></tr>";
                return;
            }






            var stringWithElements = "";
            for(var i =0; i< responseObject.length; i++){
                stringWithElements += "<div class = 'col-md-4 col-xs-6 work' id = 'boxTable'><img class='img-responsive' id = 'img-erasum' src='"+responseObject[i].logo+"' alt=''/><div class='overlay'></div><div class='work-content'><h3>"+responseObject[i].name+"</h3><div class='work-link'><a href='https://elfe.tu-sofia.bg/ELFE/Docs/"+responseObject[i].document+"' target ='_blank'><i class='fas fa-file-pdf'></i></a><a class='lightbox' href='"+responseObject[i].link+"'><i class='fas fa-globe'></i></a></div></div></div>";

            }


                document.getElementById("tableRow").innerHTML = stringWithElements;


        }
    };
    xhr.send(parameters);





    },800);






}




function LiveSearchStaff(url,parameters,inputElemId){




    clearTimeout(timer);
    timer = setTimeout(function(){



// get searching chars
        let searchChars = "&search="+document.getElementById(inputElemId).value;



// add them to the params

         parameters += searchChars;


        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == 4 && xhr.status == 200) {



            var responseObject = JSON.parse(xhr.responseText);


            var removeTable = document.getElementsByClassName("content-wrapper")[0].removeChild(document.getElementById("courseTable"));


//section
            let parentSect = document.getElementsByClassName("content-wrapper")[0];
            //table with attributes
            let table = document.createElement("table");
            table.setAttribute("class","table table-responsive table-striped table-hover");
            table.setAttribute("id","courseTable");

//table elements
            let tBody = document.createElement("tbody");
            let th = document.createElement("th");
            let td = document.createElement("td");
            let tr = document.createElement("tr");
            let tHead = document.createElement("thead");


//TABLE
            parentSect.appendChild(table);
            table.appendChild(tHead);
            tHead.appendChild(tr);

//table header
            tr.innerHTML= "<th>Title</th><th>Name</th><th>Office</th><th>Telephone</th><th>Email</th><th>Webpage</th>";

//Table Body
            table.appendChild(tBody);





//if no results are found, terminate the function
            if(responseObject[0].errors){
                
                tBody.innerHTML = "<tr><td style='width:70px'></td><td>"+responseObject[0].errors+"</td><td></td><td></td><td></td></tr>";
                return;
            }






            var stringWithElements = "";
            for(var i =0; i< responseObject.length; i++){
                stringWithElements += "<tr><td>"+responseObject[i].rank+"</td><td><b>"+responseObject[i].tutor+"</b></td><td>"+responseObject[i].room+"</td><td>"+responseObject[i].telephone+"</td><td>"+responseObject[i].email+"</td><td>"+responseObject[i].webpage+"</td></tr>";

            }



                tBody.innerHTML = stringWithElements;



        }
    };
    xhr.send(parameters);





    },800);






}

/***********************************
 * 
 * 
 *          Mobile Elements
 * 
 * 
************************************/

function showElemMobile(){
        
    if(window.innerWidth < 767){
        console.log('mobile version');
    }else{
        return false;
    }

    
}

function mobileMenu(elem){
    
    var timer = null;
    
    if(elem.parentElement.classList.contains('mobile-menu-open')){



        var children = document.getElementById('univ-menu-ul').children;

        function translateEachElement(elem){

            elem.style.transform = "translateX(-100%)";
        }


        for(var i = 0; i < children.length; i++){

            var eachChild = children[i];
            var translate =  translateEachElement(eachChild);

               timer = setTimeout(function(){

               translate;

            },400);




        }
        
        clearTimeout(timer);
        elem.parentElement.classList.remove('mobile-menu-open');
        elem.classList.remove('close-mobile');
        
        
    }else{
        var children = document.getElementById('univ-menu-ul').children;

        function translateEachElement(elem){
            
            timer = setTimeout(function(){
                
               elem.style.transform = "translateX(0)";
                
            },400);
        
        }
        for(var i = 0; i < children.length; i++){
            
            var eachChild = children[i];
            translateEachElement(eachChild);
            

            
        }
        elem.parentElement.classList.add('mobile-menu-open');
        elem.classList.add('close-mobile');
    }
}

/************************************
 * 
 *
 *          Gallery
 * 
 * 
*************************************/


class Gallery{
    
galleryAnimation(){
    
    
    var gallery = document.querySelector('.gallery');
    var galleryItems = document.querySelectorAll('.gallery-item');
    var numOfItems = gallery.children.length;
    var itemWidth = 23; // percent: as set in css
    
    var featured = document.querySelector('.featured-item');
    
    var leftBtn = document.querySelector('.move-btn.left');
    var rightBtn = document.querySelector('.move-btn.right');
    var leftInterval;
    var rightInterval;
    
    var scrollRate = 0.2;
    var left;
    
    function selectItem(e) {
    	if (e.target.classList.contains('active')) return;
    	
    	featured.style.backgroundImage = e.target.style.backgroundImage;
    	
    	for (var i = 0; i < galleryItems.length; i++) {
    		if (galleryItems[i].classList.contains('active'))
    			galleryItems[i].classList.remove('active');
    	}
    	
    	e.target.classList.add('active');
    }
    
    function galleryWrapLeft() {
    	var first = gallery.children[0];
    	gallery.removeChild(first);
    	gallery.style.left = -itemWidth + '%';
    	gallery.appendChild(first);
    	gallery.style.left = '0%';
    }
    
    function galleryWrapRight() {
    	var last = gallery.children[gallery.children.length - 1];
    	gallery.removeChild(last);
    	gallery.insertBefore(last, gallery.children[0]);
    	gallery.style.left = '-23%';
    }
    
    function moveLeft() {
    	left = left || 0;
    
    	leftInterval = setInterval(function() {
    		gallery.style.left = left + '%';
    
    		if (left > -itemWidth) {
    			left -= scrollRate;
    		} else {
    			left = 0;
    			galleryWrapLeft();
    		}
    	}, 1);
    }
    
    function moveRight() {
    	//Make sure there is element to the leftd
    	if (left > -itemWidth && left < 0) {
    		left = left  - itemWidth;
    		
    		var last = gallery.children[gallery.children.length - 1];
    		gallery.removeChild(last);
    		gallery.style.left = left + '%';
    		gallery.insertBefore(last, gallery.children[0]);	
    	}
    	
    	left = left || 0;
    
    	leftInterval = setInterval(function() {
    		gallery.style.left = left + '%';
    
    		if (left < 0) {
    			left += scrollRate;
    		} else {
    			left = -itemWidth;
    			galleryWrapRight();
    		}
    	}, 1);
    }
    
    function stopMovement() {
    	clearInterval(leftInterval);
    	clearInterval(rightInterval);
    }
    
    leftBtn.addEventListener('mouseenter', moveLeft);
    leftBtn.addEventListener('mouseleave', stopMovement);
    rightBtn.addEventListener('mouseenter', moveRight);
    rightBtn.addEventListener('mouseleave', stopMovement);
    
    
    //Start this baby up
    (function init() {
    	var images = [
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/car.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/city.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/deer.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/flowers.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/food.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/guy.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/landscape.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/lips.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/night.jpg',
    		'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/table.jpg'
    	];
    	
    	//Set Initial Featured Image
    	featured.style.backgroundImage = 'url(' + images[0] + ')';
    	
    	//Set Images for Gallery and Add Event Listeners
    	for (var i = 0; i < galleryItems.length; i++) {
    		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
    		galleryItems[i].addEventListener('click', selectItem);
    	}
    })();


}

}