var timer;

    var url = window.location.href.split('/');
    var stringifiedUrl = url[url.length - 1];

function attachEditEventHandler() {for ( var elementsEdit = document.getElementsByClassName("edit-staff"), i = 0; i < elementsEdit.length; i++) elementsEdit[i].addEventListener("click", function() {
    var e = this.parentNode.getAttribute("data-id"),
        t = this.parentNode.getElementsByClassName("editable-field"),
        a = this;
    if( a.parentNode.getElementsByClassName('cancel-edit-class')[0]){
        a.parentNode.getElementsByClassName('cancel-edit-class')[0].remove();
    }
    
    a.parentNode.getElementsByTagName("td").length;
    clearTimeout(timer), timer = setTimeout(function() {
        var n = new XMLHttpRequest;
        n.open("POST", "http://www.tu-sofia.musclevale.com/administration/requests/"+stringifiedUrl), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var s = new Object;
        s.action = "edit", s.id = e, n.send(JSON.stringify(s)), n.onreadystatechange = function() {
            if (4 == n.readyState && 200 == n.status) {
                var e = JSON.parse(n.responseText);
                if (e.true) {
                    
                    switch (stringifiedUrl) {
                        case "erasmusEdit.php":
                            var s = [e.true.NAME, e.true.COUNTRY, e.true.LINK, e.true.TIME, e.true.DOCUMENT, e.true.REMARKS, e.true.LOGO];
                            break;
                        case "staffEdit.php":
                             var s =  [e.true.name, e.true.title, e.true.office, e.true.tel, e.true.email, e.true.web, e.true.rank];
                             break;
                        case "courcesEdit.php":
                             var s =  [e.true.id, e.true.programme, e.true.programmename, e.true.coursename, e.true.optional, e.true.semester, e.true.code, e.true.lecturer];
                             break;
                    }
                    a.parentNode.getElementsByClassName("remove-staff-class")[0].style.display = "none", a.parentNode.getElementsByClassName("edit-staff")[0].style.display = "none";
                    var l = document.createElement("td"),
                        r = document.createElement("a");
                    l.setAttribute("id", "cancel-edit"), l.setAttribute("class", "cancel-edit-class"), r.innerHTML = "Cancel", l.appendChild(r), a.parentNode.appendChild(l);
                    var i = document.createElement("td"),
                        d = document.createElement("a");
                    d.innerHTML = "Submit", i.setAttribute("class", "staff-submit"), i.setAttribute("id", "staff__submitID"), i.setAttribute("onclick", "submitHandler(this)"), i.appendChild(d), a.parentNode.appendChild(i), a.parentNode.getElementsByClassName("cancel-edit-class")[0].addEventListener("click", function() {
                        for (var e = 0; e < t.length; e++) a.parentNode.getElementsByClassName("remove-staff-class")[0].style.display = "table-cell", a.parentNode.getElementsByClassName("edit-staff")[0].style.display = "table-cell", this.remove(), t[e].children[0].style.display = "block", t[e].children[1].remove();
                        a.parentNode.getElementsByClassName("staff-submit")[0].remove();
                    });
                    for (var m = 0; m < t.length; m++) t[m].children[0].style.display = "none", t[m].appendChild(defaultInput("POST", "text", s[m]));
                } else
                    for (m = 0; m < t.length; m++) t[m].innerHTML = "There was an error !";
            }
        };
    }, 300);
});
}


attachEditEventHandler();

function LiveSearchResultRows(ajaxResults){
    let table = document.getElementsByTagName('table')[0];
    let body = table.getElementsByTagName('tbody')[0];
    if(ajaxResults[0].errors){
        body.innerHTML = ajaxResults[0].errors;
    }else{
        var elements = '';
        const keys = Object.keys(ajaxResults[0]);
        for (let i = 0; i < ajaxResults.length; i++) {
            elements +=
            '<tr data-id="'+ajaxResults[i].id+'">';
                for (let j = 0; j < keys.length; j++) {
                    let nameKey = keys[j];
                    if(nameKey === "id"){
                        continue;
                    }
                    elements += '<td class="editable-field"><p>' + ajaxResults[i][nameKey] +'</p></td>';
                }
            elements += '<td id="edit-staff" class="edit-staff" ><a>Edit</a></td>'+
            '<td id="remove-staff" class="remove-staff-class"><a>Remove</a></td>'
            +'</tr>';
        }
        body.innerHTML = elements;
        attachEditEventHandler();
    }

}

function LiveSearch (e, url) {
    clearTimeout(timer);
    timer = setTimeout(function(){


// get searching chars
        let searchChars = "&search="+e.value;


        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == 4 && xhr.status == 200) {
            var responseObject = JSON.parse(xhr.responseText);
            return LiveSearchResultRows(responseObject);

        }
    };
    xhr.send(searchChars);

    },800);
}

function submitHandler(e) {
    let t = e.parentNode.getElementsByClassName("editable-field"),
        a = e.parentNode.getAttribute("data-id");
    var n = {};
    for (let e = 0; e < 1; e++) n = {
        name:   t[0].getElementsByClassName("form-control")[0].value,
        title:  t[1].getElementsByClassName("form-control")[0].value,
        office: t[2].getElementsByClassName("form-control")[0].value,
        tel:    t[3].getElementsByClassName("form-control")[0].value,
        email:  t[4].getElementsByClassName("form-control")[0].value,
        web:    t[5].getElementsByClassName("form-control")[0].value,
        rank:   t[6].getElementsByClassName("form-control")[0].value
    };
    var s = new XMLHttpRequest,
        l = new URL(window.location.href);
    l = l.pathname;
    var r = new Object;
    r = {
        id: a,
        values: JSON.stringify(n),
        url: l
    }, s.open("POST", "http://www.tu-sofia.musclevale.com/administration/requests/submitEdits.php"), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.send(JSON.stringify(r)), s.onreadystatechange = function() {
        if (4 == s.readyState && (200 == s.status && JSON.parse(s.responseText).NO_ERRORS)) {
            for (let e = 0; e < t.length; e++) t[e].getElementsByTagName("form")[0].remove(), t[e].getElementsByTagName("p")[0].style.display = "block";
            t[0].getElementsByTagName("p")[0].innerHTML = n.name, t[1].getElementsByTagName("p")[0].innerHTML = n.title, t[2].getElementsByTagName("p")[0].innerHTML = n.office, t[3].getElementsByTagName("p")[0].innerHTML = n.tel, t[4].getElementsByTagName("p")[0].innerHTML = n.email, t[5].getElementsByTagName("p")[0].innerHTML = n.web, t[6].getElementsByTagName("p")[0].innerHTML = n.rank, e.parentNode.querySelector("#edit-staff").style.display = "table-cell", e.parentNode.querySelector("#remove-staff").style.display = "table-cell", e.parentNode.querySelector("#cancel-edit").remove(), e.parentNode.querySelector("#staff__submitID").remove()
        }
    }
}

function defaultInput(e, t, a) {
    var n = document.createElement("form");
    n.setAttribute("method", e);
    var s = document.createElement("div");
    s.setAttribute("class", "form-row");
    var l = document.createElement("div");
    l.setAttribute("class", "col");
    var r = document.createElement("input");
    r.id = "animated-search-input";
    //r.setAttribute('onkeyup',"LiveSearch(this, '/ajax/staff/staff_live_search.php')");
    return r.setAttribute("class", "form-control"), r.setAttribute("type", t), r.setAttribute("value", a), n.appendChild(s), s.appendChild(l), l.appendChild(r), n
}