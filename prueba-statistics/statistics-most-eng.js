function renderRows(statistics) {
    var html = getRowsHtml(statistics);
    document.getElementById("most_engaged").innerHTML = html;
}
renderRows(statistics);

function getRowsHtml(statistics){
    return statistics.most_engaged.map(function(statistic) { return "<tr><td>" + statistic.last_name +  " " + 
                                                               statistic.first_name + " " + 
                                                               ((statistic.middle_name != null) ? statistic.middle_name : "-") + "</td>" + 
                                                                "<td>" + statistic.missed_votes + "</td>" + 
                                                                "<td>" + statistic.missed_votes_pct + "</td></tr>"; 
                                                                }).join("");
                                                                                                                   
}
