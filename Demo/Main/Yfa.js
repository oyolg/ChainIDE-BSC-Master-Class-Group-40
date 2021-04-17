var a = document.getElementById("info");

        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                window.ethereum.enable();
            }
        }

        async function loadContract() {
            // set ABI
            var abi = [{"inputs":[{"internalType":"contract DaiToken","name":"_DaiToken","type":"address"},{"internalType":"contract Yfa","name":"_Yfa","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"daiToken","outputs":[{"internalType":"contract DaiToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"issusToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"stakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"staker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unstakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yfa","outputs":[{"internalType":"contract Yfa","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

            //set contract address
            var contractAddress = '0xAEdE9849998D10C2859897eCf225F4Aaf9fa4a8C';

            return await new window.web3.eth.Contract(abi,contractAddress);
        }

        async function getStake() {
            updateStatus('fetching All Staked Tokens...');
            const stakeAmount = await window.contract.methods.stakeAmount(contractAddress).call();
            
                a.innerHTML = a.innerHTML+"<h5>" + " Amount of Token Staked = " + stakeAmount + " Dai" + "</h5>";
            updateStatus(`Token Amount Staked.: `);
        }

// Changes Made Here
        
        async function stakeToken() {
            updateStatus(`Updating Farm Staking ...`);
           
            const stakeNumber = await window.contract.methods.stakeToken(document.getElementById("amount").value).send({ from: account });
            updateStatus('Updated.');
        }



        async function load() {
            await loadWeb3();
            window.contract = await loadContract();
            updateStatus('Ready!');
        }

        function updateStatus(status) {
            const statusEl = document.getElementById('status');
            statusEl.innerHTML = status;
            console.log(status);
        }

        load();