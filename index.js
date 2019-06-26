export default (function(){
    
    var countryCodes = [
        376,971,93,1268,1264,355,374,599,244,672,54,1684,43,61,297,994,387,1246,880,32,226,359,973,257,229,590,1441,673,591,55,1242,975,267,375,501,1,61,243,236,242,41,225,682,56,237,86,57,506,53,238,61,357,420,49,253,45,1767,1809,213,593,372,20,291,34,251,358,679,500,691,298,33,241,44,1473,995,233,350,299,220,224,240,30,502,1671,245,592,852,504,385,509,36,62,353,972,44,91,964,98,354,39,1876,962,81,254,996,855,686,269,1869,850,82,965,1345,856,961,1758,423,94,231,266,370,352,371,218,212,377,373,382,1599,261,692,389,223,95,976,853,1670,222,1664,356,230,960,265,52,60,258,264,687,227,234,505,31,47,977,674,683,64,968,507,51,689,675,63,92,48,508,870,1,351,680,595,974,40,381,7,250,966,677,248,249,46,65,290,386,421,232,378,221,252,597,239,503,963,268,1649,235,228,66,992,690,670,993,216,676,90,1868,688,886,255,380,256,1,598,998,39,1784,58,1284,1340,84,678,681,685,381,967,262,27,260,263
    ];
    
    var normalizePhone = '';
    var phoneNumber = '';
    
    function regionNormalize(onlyNums) {
        if (onlyNums.length < 4) {
            normalizePhone = phoneNumber = '+ ' + onlyNums.slice(0, 1) + ' ' + onlyNums.slice(1);
        } else {
            normalizePhone = phoneNumber = '+ ' + onlyNums.slice(0, 1) + ' ' + onlyNums.slice(1, 4) + ' ' + onlyNums.slice(4);
        }
        return normalizePhone;
    }
    
    function phonefield(value) {
        var onlyNums = value.replace(/[^\d]/g, '');
        var split = value.split(' ');
        
        if (phoneNumber.length > value.length) {
            phoneNumber = value;
            return normalizePhone;
        }
        if (value[0] === '+') {
            if (split[1] === '7') return regionNormalize(onlyNums);
            if (split.length === 3) return normalizePhone;
            if (countryCodes.indexOf(+onlyNums) > -1) {
                normalizePhone = phoneNumber = '+ ' + onlyNums + ' ';
            }
        } else if (value[0] === '7') {
            normalizePhone = '+ 7 ' + onlyNums.slice(1, 4) + ' ' + onlyNums.slice(4);
        } else {
            if (onlyNums.length >= 10) {
                if (onlyNums[0] == 8) {
                    normalizePhone = '+ 7 ' + onlyNums.slice(1, 4) + ' ' + onlyNums.slice(4);
                }
                if (onlyNums[0] != 8) {
                    normalizePhone = '+ 7 ' + onlyNums.slice(0, 3) + ' ' + onlyNums.slice(3);
                }
            }
        }
    
        return normalizePhone;
    }

    return phonefield;
})();
