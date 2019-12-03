//document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);

function renderRows(data) {
    var html = getRowsHtml(data);
    document.getElementById("body-data").innerHTML = html;
}
renderRows(data);

function getRowsHtml(data){
    return data.results[0].members.map(function(members) {  return "<tr><td><a href="  +  members.url +" target=' _blank'>" + members.last_name   +  " "    + 
                                                                       " " +  members.first_name   + " " +  ((members.middle_name != null) ? members.middle_name : "-") + "</a></td>"  +
                                                                       "<td>" +  members.party           +  "</td>"    +
                                                                       "<td>" +  members.state           +  "</td>"    +
                                                                       "<td>" +  members.seniority       +  "</td>"    +
                                                                       "<td>" +  members.votes_with_party_pct + "%"   +  "</td></tr>" ; }).join("");
}
