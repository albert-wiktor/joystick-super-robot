let prędkość_lewe_koło = 0
let prędkość_prawe_koło = 0
basic.forever(function () {
    prędkość_lewe_koło = (pins.analogReadPin(AnalogPin.P1) - 512) / -10
    prędkość_prawe_koło = (pins.analogReadPin(AnalogPin.P1) - 512) / -10
    prędkość_lewe_koło += (pins.analogReadPin(AnalogPin.P2) - 512) / -10
    prędkość_prawe_koło += (pins.analogReadPin(AnalogPin.P2) - 512) / 10
    if (prędkość_lewe_koło > 15) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, prędkość_lewe_koło)
    } else if (prędkość_lewe_koło < -15) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, Math.abs(prędkość_lewe_koło))
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
    }
    if (prędkość_prawe_koło > 15) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, prędkość_prawe_koło)
    } else if (prędkość_prawe_koło < -15) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, Math.abs(prędkość_prawe_koło))
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
    }
})
