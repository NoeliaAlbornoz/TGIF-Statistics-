var statistics = {
    "glance":[
      {"party": "Republicans", "number_of_members": countMembers(data, "R"), "avg_votes_with_party": averageVotes(data, "R")},
      {"party": "Democrats", "number_of_members": countMembers(data, "D"), "avg_votes_with_party":averageVotes(data, "D")},
      {"party": "Independents", "number_of_members": countMembers(data, "I"), "avg_votes_with_party":averageVotes(data, "I")},
      {"party": "Total", "number_of_members": totalMembers(data), "avg_votes_with_party": TotalAverageVotes(data)}
    ],
    "least_engaged": least("missed_votes"),
    "most_engaged": most("missed_votes"),
    "least_loyal": least("total_votes"),
    "most_loyal": most("total_votes")
}
