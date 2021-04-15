<!-- This Code was Given during the Binance Master Class was Posted Here For our Group Subclass -->
<!DOCTYPE html>
<html>
<head>
<style>

    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title id ="header">
    </title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <script src='https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js'></script>
</head>

<body>

    

    <script type="text/javascript">
     var a = document.getElementById("info");

        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                window.ethereum.enable();
            }
        }

        async function loadContract() {
            // set ABI
            var abi = [{"constant":true,"inputs":[{"name":"_tweetId","type":"uint256"}],"name":"getTweetDetail","outputs":[{"name":"tweetId","type":"uint256"},{"name":"name","type":"string"},{"name":"content","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_content","type":"string"}],"name":"createTweet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTotalTweet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tweets","outputs":[{"name":"tweetId","type":"uint256"},{"name":"name","type":"string"},{"name":"content","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tweetId","type":"uint256"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"content","type":"string"}],"name":"NewTwitter","type":"event"}];

            //set contract address
            var contractAddress = '0x2B0a900D4a2aDD754e34A4564901A3088ae32A41';

            return await new window.web3.eth.Contract(abi,contractAddress);
        }

        async function getTweets() {
            updateStatus('fetching All Tweets...');
            const tweetsNumber = await window.contract.methods.getTotalTweet().call();
            
            for (i = 0;i < tweetsNumber;i++){
                var result1 = await window.contract.methods.getTweetDetail(i).call();
                a.innerHTML = a.innerHTML+"<h5>" + "TweetID: "+result1[0]+" " + "Name: " + result1[1] + " Content: " + result1[2] + "</h5>";

            }
           
            updateStatus(`All Tweets No.: ${tweetsNumber}`);
        }

        async function getCurrentAccount() {
            const accounts = await window.web3.eth.getAccounts();
            return accounts[0];
        }

        async function changeCoolNumber() {
            updateStatus(`Updating LonelyTwitter ...`);
            const account = await getCurrentAccount();
            const coolNumber = await window.contract.methods.createTweet(document.getElementById("name").value,document.getElementById("content").value).send({ from: account });
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
    </script>
</body>

</html>