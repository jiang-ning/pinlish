/**
 * Pinlish
 * Testing ONLY, for catching any missing soundtrack files
 * @author Jiang Ning
 */
 import dict from './dict.js';

 const tester = function () {

    let dictTotal = 0;
    let vocalExist = 0
    let vocalMissing = 0;

    const valGrp = Object.values(dict);

    valGrp.forEach((grp) => {

        dictTotal += grp.length;

        grp.forEach((val)=>{

            let fileURL = '../vocal/' + val + '.mp3';
            fetch(fileURL).then(response => {
                if(response.ok) {
                    vocalExist ++;
                } else {
                    console.log(fileURL + ' not found');
                    vocalMissing ++;
                }
            }).catch(error => {
                console.log(error);
            });

        });

    });

    console.log('Dictionary total: ' + dictTotal);
    console.log('Vocal files total: ' + vocalExist + vocalMissing);
    console.log('Vocal files exist: ' + vocalExist);
    console.log('Vocal files missing: ' + vocalMissing);

 }

export default tester;
