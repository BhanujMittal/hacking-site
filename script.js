const generateRandomBinary = (length) => {
    let binaryNumber = '';
    for (let i = 0; i < length; i++) {
        binaryNumber += Math.round(Math.random());
    }
    return binaryNumber;
};

const updateDiv = async () => {
    if (!stopClicked) {
        const binaryLength = 30; // Adjust the desired length
        leftDiv.innerHTML = generateRandomBinary(binaryLength) + leftDiv.innerHTML;
        rightDiv.innerHTML = generateRandomBinary(binaryLength) + rightDiv.innerHTML;
        setTimeout(updateDiv, 200);
        return `Initiliazing Hack..... <hr>`
    }
}

const createElement = () => {
    if (!isClicked) {
        let p = document.createElement('p')
        return p;
    } else {
        return;
    }
}

let isClicked;

let leftDiv = document.getElementById('left-bar');
let rightDiv = document.getElementById('right-bar')
let stopButton = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let hackData = document.getElementById('hack-section-data')
let bothButton = document.getElementsByClassName('buttons')[0];
let hackInput = document.getElementById('hackInput');
let stopClicked = false;
stopButton.disabled = true;
let instagram = document.getElementById('instagram')
let facebook = document.getElementById('facebook')

startBtn.addEventListener('click', () => {
    isClicked = false;
    setTimeout(() => {
        hackData.innerHTML = `Hacked Successfull`
        setTimeout(() => {
            stopButton.click();
        }, 2000);
    }, 11000);
    try {
        if (hackInput.value === '') {
            throw new Error(`Text Input can't be empty!!!`)
        } else if ((hackInput.value).length !== 10) {
            throw new Error(`Entered number is not valid, Please enter a valid 10 digit mobile number to initialize hack!!!!`);
        } else {
            stopButton.disabled = false;
            stopClicked = false;
            startBtn.disabled = true;
            bothButton.classList.add('absolute');
            try {
                updateDiv().then((value) => {
                    setTimeout(() => {
                        try {
                            hackData.appendChild(createElement()).innerHTML = value + `<hr>`;
                        }
                        catch (error) {
                            console.log()
                        }
                    }, 1000);
                    return `Getting User's Data..... <hr>`;
                }).then((value) => {

                    setTimeout(() => {
                        try {
                            hackData.appendChild(createElement()).innerHTML = value + `<hr>`
                        } catch (error) {
                            console.log()
                        }
                    }, 2000);
                    return `We've found the user's data...Wait for a while!!!! <hr>`
                }).then((value) => {
                    try {
                        if (instagram.checked && facebook.checked) {
                            setTimeout(() => {
                                try {

                                    hackData.appendChild(createElement()).innerHTML = `Getting user's Instagram Password....Please Wait!!! <hr>`
                                }
                                catch (error) {
                                    console.log('')
                                }
                            }, 3000);
                            setTimeout(() => {
                                try {

                                    hackData.appendChild(createElement()).innerHTML = `Getting user's Facebook Password....Please Wait!!! <hr>`
                                }
                                catch (error) {
                                    console.log()
                                }
                            }, 4000);
                        } else if (facebook.checked) {
                            setTimeout(() => {
                                try {

                                    hackData.appendChild(createElement()).innerHTML = `Getting user's Facebook Password....Please Wait!!! <hr>`
                                }
                                catch (error) {
                                    console.log()
                                }
                            }, 3000);
                        } else if (instagram.checked) {
                            setTimeout(() => {
                                try {

                                    hackData.appendChild(createElement()).innerHTML = `Getting user's Instagram Password....Please Wait!!! <hr>`
                                }
                                catch (error) {
                                    console.log()
                                }
                            }, 3000);

                        }
                    }
                    catch (error) {
                        console.log('None of them is selected')
                    }
                    finally {
                        if (instagram.checked || facebook.checked) {
                            setTimeout(() => {
                                try {

                                    hackData.appendChild(createElement()).innerHTML = value + `<hr>`;
                                }
                                catch (error) {
                                    console.log()
                                }
                            }, 5000);
                        } else if (instagram.checked && facebook.checked) {
                            setTimeout(() => {
                                try {
                                    hackData.appendChild(createElement()).innerHTML = value + `<hr>`;
                                }
                                catch (error) {
                                    console.log()
                                }
                            }, 5000);
                        } else {
                            setTimeout(() => {
                                try {
                                    hackData.appendChild(createElement()).innerHTML = value + `<hr>`;
                                }
                                catch (error) {
                                    console.log()
                                }
                            }, 3000);
                        }

                        return `User's Bank Details of Number ${hackInput.value} are: 
                        Acount Number: 6148XXXX8797     Balance: 96729$ <hr>`
                    }
                }).then((value) => {
                    try {
                        if (instagram.checked || facebook.checked) {
                            if (instagram.checked && facebook.checked) {
                                setTimeout(() => {
                                    try {

                                        hackData.appendChild(createElement()).innerHTML = `User's Instagram Id is: User.name 
                                        Password: IXXGroot <hr>`;
                                    }
                                    catch (error) {
                                        console.log()
                                    }
                                }, 6000);
                                setTimeout(() => {
                                    try {

                                        hackData.appendChild(createElement()).innerHTML = `User's Facebook Id is: User.name 
                                            Password: MAIXXGIYAN <hr>`;
                                    }
                                    catch (error) {
                                        console.log()
                                    }
                                }, 7000);
                            } else if (facebook.checked) {
                                setTimeout(() => {
                                try {

                                        hackData.appendChild(createElement()).innerHTML = `User's Facebook Id is: User.name 
                                        Password: MAIXXGIYAN <hr>`;
                                    }
                                    catch (error) {
                                        console.log()
                                    }
                                }, 7000);
                            } else {
                                setTimeout(() => {
                                try {

                                        hackData.appendChild(createElement()).innerHTML = `User's Instagram Id is: User.name 
                                        Password: IXXGroot <hr>`;
                                    }
                                    catch (error) {
                                        console.log()
                                    }
                                }, 7000);
                            }
                        }
                    }
                    catch (error) {
                        console.log(error)
                    }
                    finally {
                        if (instagram.checked && facebook.checked) {
                            setTimeout(() => {
                            try {
                                    hackData.appendChild(createElement()).innerHTML = value + `<hr>`;
                                }
                                catch (error) {
                                    console.log()
                                }
                            }, 8000);
                        } else {
                            setTimeout(() => {
                            try {
                                    hackData.appendChild(createElement()).innerHTML = value + `<hr>`;
                                }
                                catch (error) {
                                    console.log()
                                }
                            }, 8000);
                        }
                    }
                })
            }
            catch (error) {
                throw new Error('kya hal h bhai')
            }
            finally {
                createElement().style.fontSize = '2.3rem'
            }
        }
    }
    catch (error) {
        alert(`${error}`);
    }

    finally {
        // hackInput.value = '' 
        if (instagram.checked && facebook.checked) {
            setTimeout(() => {
                try {

                    hackData.appendChild(createElement()).innerHTML = 'Congrats, Hack Successfull';
                }
                catch(error) {
                    console.log()
                }
            }, 9000);
        } else if (instagram.checked || facebook.checked) {
            setTimeout(() => {
                try {

                    hackData.appendChild(createElement()).innerHTML = 'Congrats, Hack Successfull';
                }
                catch(error) {
                    console.log()
                }
            }, 9000);

        } else {
            setTimeout(() => {
                try {

                    hackData.appendChild(createElement()).innerHTML = 'Congrats, Hack Successfull';
                }
                catch(error) {
                    console.log()
                }
            }, 9000);
        }
    }
});


stopButton.addEventListener('click', () => {
    isClicked = true;
    stopClicked = true;
    startBtn.disabled = false;
    stopButton.disabled = true;
    hackData.innerHTML = '';
    hackInput.value = '';
    instagram.checked = false;
    facebook.checked = false;
    leftDiv.innerHTML = `111000000111001011010100000010000001110111010011010010010000101010001111011101100101001100110111100111001011111110110010001111001010000001111110111010101011011010000011010011101100101111001000011100011101100110100001010110010110011011001111111110101010101010110010011110100100100110000101111110101111101100001000010101110001110101110001101001100110000001111110011010111100101011110011111101001101100111001111011001010110101101100010101000111010010001100100010011110110110100001100001100100010110000100111010100011010010111000000010100101110111001101000110111111101010000100111001010110111000110110100000100101010111110111111000010010110000000000000100011010011000000011001101000111000000100100000001011011010111010001000101011000101011110010001000001001110000101100110110111001101010111000001010101010000111001110010101000010110100110100000100100110110011101011111110110110001101101010001010010110110011010010110110111001010100100001100010011010101010000011101101101100000111011101101010110010000101011011001100100101010001110001111101001000100011110011100010000010101110111110000`;
    rightDiv.innerHTML = `111000000111001011010100000010000001110111010011010010010000101010001111011101100101001100110111100111001011111110110010001111001010000001111110111010101011011010000011010011101100101111001000011100011101100110100001010110010110011011001111111110101010101010110010011110100100100110000101111110101111101100001000010101110001110101110001101001100110000001111110011010111100101011110011111101001101100111001111011001010110101101100010101000111010010001100100010011110110110100001100001100100010110000100111010100011010010111000000010100101110111001101000110111111101010000100111001010110111000110110100000100101010111110111111000010010110000000000000100011010011000000011001101000111000000100100000001011011010111010001000101011000101011110010001000001001110000101100110110111001101010111000001010101010000111001110010101000010110100110100000100100110110011101011111110110110001101101010001010010110110011010010110110111001010100100001100010011010101010000011101101101100000111011101101010110010000101011011001100100101010001110001111101001000100011110011100010000010101110111110000`;
    bothButton.classList.remove('absolute')
});