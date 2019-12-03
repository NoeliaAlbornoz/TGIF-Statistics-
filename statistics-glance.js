function renderRows(statistics) {
    var html = getRowsHtml(statistics);
    document.getElementById("senate_at_glance").innerHTML = html;
}
renderRows(statistics);

function getRowsHtml(statistics){
    return statistics.glance.map(function(statistic) { return "<tr><td>" + statistic.party + "</td>" + 
                                                        "<td>" + statistic.number_of_members + "</td>" + 
                                                        "<td>" + statistic.avg_votes_with_party + "</td></tr>"; 
                                                     }).join("");
                                                                                                                   
}
