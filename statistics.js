function filterMembers(data, letter_party){

    return data.results[0].members.filter(function(members) { return members.party === letter_party });

}

function countMembers(data, letter_party){

    return filterMembers(data, letter_party).length;
     
}

function totalMembers(data){

    return countMembers(data, "R") + countMembers(data, "D") + countMembers(data, "I");
}

function averageVotes(data, letter_party){

    return countMembers(data, letter_party) !== 0 ? validDivision(data, letter_party) : 0;

}

function validDivision(data, letter_party){

    return Math.round(filterMembers(data, letter_party).reduce(function(accumulator, members) { 
        return accumulator + members.votes_with_party_pct; }, 0) / countMembers(data, letter_party));
            
}

function TotalAverageVotes(data){

    return Math.round((averageVotes(data, "R") + averageVotes(data, "D") + averageVotes(data, "I")) / 3);

}

function least(field){

    return orderVotes(field).slice(0, tenPctMembers(data));

}

function most(field){

    return orderVotes(field).slice(-(tenPctMembers(data)));

}

function orderVotes(field){

    return data.results[0].members.sort(function(prev, next){ return prev[field] - next[field] });

}

function tenPctMembers(data){

    return Math.round((10 * totalMembers(data))/100);

}
