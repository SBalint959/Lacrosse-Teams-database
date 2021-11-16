//Promjena vrste filtriranja
var filterType = document.getElementById("filter");
function filterFunckija() {
    var filterType = document.getElementById("filter").selectedIndex;
    if (filterType == 0) {
        document.getElementsByClassName("searchbar")[0].setAttribute("id", "sve");
        document.getElementsByClassName("searchbar")[0].setAttribute("onkeyup", "pretragaSvega()");
        document.getElementsByClassName("searchbar")[0].setAttribute("placeholder", "Pretraga po svim poljima..");
    }
    else if (filterType == 1) {
        document.getElementsByClassName("searchbar")[0].setAttribute("id", "imeTim");
        document.getElementsByClassName("searchbar")[0].setAttribute("onkeyup", "pretragaPoImenuTima()");
        document.getElementsByClassName("searchbar")[0].setAttribute("placeholder", "Pretraga po imenu vozača..");
    }
    else if (filterType == 2) {
        document.getElementsByClassName("searchbar")[0].setAttribute("id", "prezime");
        document.getElementsByClassName("searchbar")[0].setAttribute("onkeyup", "pretragaPoPrezimenu()");
        document.getElementsByClassName("searchbar")[0].setAttribute("placeholder", "Pretraga po prezimenu vozača..");
    }
}

function pretragaSvega() {
    var input;
    var filter;
    var table;
    var i;
    input = document.getElementById("sve");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    for (i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var j;
        var rowContainsFilter = false;
        for (j = 0; j < cells.length; j++) {
            if (cells[j]) {
                if (cells[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    rowContainsFilter = true;
                    continue;
                }
            }
        }
        if (!rowContainsFilter) {
            rows[i].style.display = "none";
        } else {
            rows[i].style.display = "";
        }
    }
}

function pretragaPoImenuTima() {
    var input;
    var filter;
    var table;
    var tr;
    var td;
    var i;
    var txtValue;
    input = document.getElementById("imeTim");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function pretragaPoPrezimenu() {
    var input;
    var filter;
    var table;
    var tr;
    var td;
    var i;
    var txtValue;
    input = document.getElementById("prezime");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[13];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function TurnIntoCSV(html, imeDatoteke) {
    filterFunckija();
    var data = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
        var row = [];
        if (rows[i].style.display == "none") {
            continue
        } else {
            var cols = rows[i].querySelectorAll("td, th");
            for (var j = 0; j < cols.length; j++) {
                row.push(cols[j].innerText);
            }
            data.push(row.join(","));
        }
        
    }
    downloadCSV(data.join("\n"), imeDatoteke);
}

function downloadCSV(csv, imeDatoteke) {
    var csv_file, download_link;
    csv_file = new Blob([csv], { type: "text/csv" });
    download_link = document.createElement("a");
    download_link.download = imeDatoteke;
    download_link.href = window.URL.createObjectURL(csv_file);
    download_link.style.display = "none";
    document.body.appendChild(download_link);
    download_link.click();
}

document.getElementById("csv-button").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
    TurnIntoCSV(html, "nll.csv");
});