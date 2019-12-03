function renderRows(statistics) {
    var html = getRowsHtml(statistics);
    document.getElementById("least_loyal").innerHTML = html;
}
renderRows(statistics);

function getRowsHtml(statistics){
    return statistics.least_loyal.map(function(statistic) { return "<tr><td>" + statistic.last_name +  " " + 
                                                               statistic.first_name + " " + 
                                                               ((statistic.middle_name != null) ? statistic.middle_name : "-") + "</td>" + 
                                                                "<td>" + statistic.total_votes + "</td>" + 
                                                                "<td>" + statistic.votes_with_party_pct + "</td></tr>"; 
                                                                }).join("");
                                                                                                                   
}
