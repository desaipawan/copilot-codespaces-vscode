function calculateSkillPoints() {
    var skillPoints = 0;
    for (var i = 0; i < skills.length; i++) {
        skillPoints += skills[i].points;
    }
    return skillPoints;
}