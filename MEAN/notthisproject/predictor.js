/**
 * Created by ifelsc on 9/28/2017.
 */
function predict(wins, losses, targetPct) {
var i=0;
    var startingWins = wins;
    var losses = losses;
    var totalGames = wins + losses;
    var targetPct = targetPct +"%";


    console.log("Starting Wins "+wins);
    console.log("Starting Losses "+losses);
    console.log("Starting Record: "+wins+" - "+losses);
    console.log("Starting Games: "+totalGames);
    console.log("Starting Win %: "+wins/totalGames);
    console.log("__________________");

    while(i != -1){
        var iar = 0;

        if(wins/totalGames < 0.66){
            wins++;
            totalGames++;
            console.log("Current Wins "+wins);
            console.log("Current Losses "+losses);
            console.log("Current Record: "+wins+" - "+losses);
            console.log("Win Pct: "+wins/totalGames);
            console.log("Current Games "+totalGames);
            console.log("Need to Win More Games to reach "+targetPct);
            console.log("__________________");
        }
        else {

            iar = wins-startingWins;
            console.log("CONGRATS ON "+targetPct+"!!!")
            console.log("You need to win "+iar+" in a row");
            i=-1;
        }

    }



}

predict(22,33,0.66);