// const filter = (array, letter) => array.filter(s => s.startsWith(letter));

const suppliesArray = [
    {
        name : "red"
    },
    {
        name : "raddd"
    },
    {
        name : "vijay"
    },
    {
        name : "rohit"
    },
    {
        name : "amar"
    },
    {
        name : "ajay"
    }
];
  
const result = suppliesArray.filter(s=>s.name.startsWith('a'));

console.log(result);
/*

{_id: '64c374bba31bb14940e7b254', id: '3', name: 'Bengaluru', state: 'Karnataka'}
1
: 
{_id: '64c374bba31bb14940e7b255', id: '2', name: 'Delhi', state: 'Delhi'}
2
: 
{_id: '64c374bba31bb14940e7b256', id: '1', name: 'Mumbai', state: 'Maharashtra'}
3
: 
{_id: '64c374bba31bb14940e7b257', id: '6', name: 'Chennai', state: 'Tamil Nadu'}
4
: 
{_id: '64c374bba31bb14940e7b258', id: '5', name: 'Hyderabad', state: 'Telangana'}
5
: 
{_id: '64c374bba31bb14940e7b259', id: '7', name: 'Kolkata', state: 'West Bengal'}
6
: 
{_id: '64c374bba31bb14940e7b25a', id: '8', name: 'Pune', state: 'Maharashtra'}
7
: 
{_id: '64c374bba31bb14940e7b25b', id: '9', name: 'Jaipur', state: 'Rajasthan'}
8
: 
{_id: '64c374bba31bb14940e7b25c', id: '4', name: 'Ahmedabad', state: 'Gujarat'}
9
: 
{_id: '64c374bba31bb14940e7b25d', id: '10', name: 'Surat', state: 'Gujarat'}
10
: 
{_id: '64c374bba31bb14940e7b25e', id: '14', name: 'Patna', state: 'Bihar'}
11
: 
{_id: '64c374bba31bb14940e7b25f', id: '13', name: 'Nagpur', state: 'Maharashtra'}
12
: 
{_id: '64c374bba31bb14940e7b260', id: '15', name: 'Indore', state: 'Madhya Pradesh'}
13
: 
{_id: '64c374bba31bb14940e7b261', id: '16', name: 'Thane', state: 'Maharashtra'}
14
: 
{_id: '64c374bba31bb14940e7b262', id: '17', name: 'Bhopal', state: 'Madhya Pradesh'}
15
: 
{_id: '64c374bba31bb14940e7b263', id: '18', name: 'Visakhapatnam', state: 'Andhra Pradesh'}
16
: 
{_id: '64c374bba31bb14940e7b264', id: '11', name: 'Lucknow', state: 'Uttar Pradesh'}
17
: 
{_id: '64c374bba31bb14940e7b265', id: '12', name: 'Kanpur', state: 'Uttar Pradesh'}
18
: 
{_id: '64c374bba31bb14940e7b266', id: '22', name: 'Rajkot', state: 'Gujarat'}
19
: 
{_id: '64c374bba31bb14940e7b267', id: '21', name: 'Ludhiana', state: 'Punjab'}
20
: 
{_id: '64c374bba31bb14940e7b268', id: '23', name: 'Agra', state: 'Uttar Pradesh'}
21
: 
{_id: '64c374bba31bb14940e7b269', id: '24', name: 'Siliguri', state: 'West Bengal'}
22
: 
{_id: '64c374bba31bb14940e7b26a', id: '25', name: 'Nashik', state: 'Maharashtra'}
23
: 
{_id: '64c374bba31bb14940e7b26b', id: '26', name: 'Faridabad', state: 'Haryana'}
24
: 
{_id: '64c374bba31bb14940e7b26c', id: '27', name: 'Patiala', state: 'Punjab'}
25
: 
{_id: '64c374bba31bb14940e7b26d', id: '19', name: 'Vadodara', state: 'Gujarat'}
26
: 
{_id: '64c374bba31bb14940e7b26e', id: '20', name: 'Firozabad', state: 'Uttar Pradesh'}
27
: 
{_id: '64c374bba31bb14940e7b26f', id: '31', name: 'Varanasi', state: 'Uttar Pradesh'}
28
: 
{_id: '64c374bba31bb14940e7b270', id: '30', name: 'Vasai-Virar', state: 'Maharashtra'}
29
: 
{_id: '64c374bba31bb14940e7b271', id: '32', name: 'Srinagar', state: 'Jammu and Kashmir'}
30
: 
{_id: '64c374bba31bb14940e7b272', id: '33', name: 'Dhanbad', state: 'Jharkhand'}
31
: 
{_id: '64c374bba31bb14940e7b273', id: '34', name: 'Jodhpur', state: 'Rajasthan'}
32
: 
{_id: '64c374bba31bb14940e7b274', id: '35', name: 'Amritsar', state: 'Punjab'}
33
: 
{_id: '64c374bba31bb14940e7b275', id: '28', name: 'Meerut', state: 'Uttar Pradesh'}
34
: 
{_id: '64c374bba31bb14940e7b276', id: '36', name: 'Raipur', state: 'Chhattisgarh'}
35
: 
{_id: '64c374bba31bb14940e7b277', id: '29', name: 'Kalyan-Dombivali', state: 'Maharashtra'}
36
: 
{_id: '64c374bba31bb14940e7b278', id: '37', name: 'Allahabad', state: 'Uttar Pradesh'}
37
: 
{_id: '64c374bba31bb14940e7b279', id: '38', name: 'Coimbatore', state: 'Tamil Nadu'}
38
: 
{_id: '64c374bba31bb14940e7b27a', id: '39', name: 'Jabalpur', state: 'Madhya Pradesh'}
39
: 
{_id: '64c374bba31bb14940e7b27b', id: '41', name: 'Vijayawada', state: 'Andhra Pradesh'}
40
: 
{_id: '64c374bba31bb14940e7b27c', id: '42', name: 'Madurai', state: 'Tamil Nadu'}
41
: 
{_id: '64c374bba31bb14940e7b27d', id: '40', name: 'Gwalior', state: 'Madhya Pradesh'}
42
: 
{_id: '64c374bba31bb14940e7b27e', id: '43', name: 'Guwahati', state: 'Assam'}
43
: 
{_id: '64c374bba31bb14940e7b27f', id: '45', name: 'Hubli-Dharwad', state: 'Karnataka'}
44
: 
{_id: '64c374bba31bb14940e7b280', id: '47', name: 'Moradabad', state: 'Uttar Pradesh'}
45
: 
{_id: '64c374bba31bb14940e7b281', id: '44', name: 'Chandigarh', state: 'Chandigarh'}
46
: 
{_id: '64c374bba31bb14940e7b282', id: '48', name: 'Gurgaon', state: 'Haryana'}
47
: 
{_id: '64c374bba31bb14940e7b283', id: '49', name: 'Aligarh', state: 'Uttar Pradesh'}
48
: 
{_id: '64c374bba31bb14940e7b284', id: '50', name: 'Solapur', state: 'Maharashtra'}
49
: 
{_id: '64c374bba31bb14940e7b285', id: '52', name: 'Jalandhar', state: 'Punjab'}
50
: 
{_id: '64c374bba31bb14940e7b286', id: '51', name: 'Ranchi', state: 'Jharkhand'}
51
: 
{_id: '64c374bba31bb14940e7b287', id: '46', name: 'Amroha', state: 'Uttar Pradesh'}
52
: 
{_id: '64c374bba31bb14940e7b288', id: '56', name: 'Warangal', state: 'Telangana'}
53
: 
{_id: '64c374bba31bb14940e7b289', id: '54', name: 'Bhubaneswar', state: 'Odisha'}
54
: 
{_id: '64c374bba31bb14940e7b28a', id: '57', name: 'Mira-Bhayandar', state: 'Maharashtra'}
55
: 
{_id: '64c374bba31bb14940e7b28b', id: '58', name: 'Thiruvananthapuram', state: 'Kerala'}
56
: 
{_id: '64c374bba31bb14940e7b28c', id: '59', name: 'Bhiwandi', state: 'Maharashtra'}
57
: 
{_id: '64c374bba31bb14940e7b28d', id: '60', name: 'Saharanpur', state: 'Uttar Pradesh'}
58
: 
{_id: '64c374bba31bb14940e7b28e', id: '61', name: 'Guntur', state: 'Andhra Pradesh'}
59
: 
{_id: '64c374bba31bb14940e7b28f', id: '53', name: 'Tiruchirappalli', state: 'Tamil Nadu'}
60
: 
{_id: '64c374bba31bb14940e7b290', id: '64', name: 'Noida', state: 'Uttar Pradesh'}
61
: 
{_id: '64c374bba31bb14940e7b291', id: '55', name: 'Salem', state: 'Tamil Nadu'}
62
: 
{_id: '64c374bba31bb14940e7b292', id: '65', name: 'Jamshedpur', state: 'Jharkhand'}
63
: 
{_id: '64c374bba31bb14940e7b293', id: '67', name: 'Cuttack', state: 'Odisha'}
64
: 
{_id: '64c374bba31bb14940e7b294', id: '68', name: 'Kochi', state: 'Kerala'}
65
: 
{_id: '64c374bba31bb14940e7b295', id: '66', name: 'Bhilai Nagar', state: 'Chhattisgarh'}
66
: 
{_id: '64c374bba31bb14940e7b296', id: '70', name: 'Bhavnagar', state: 'Gujarat'}
67
: 
{_id: '64c374bba31bb14940e7b297', id: '71', name: 'Dehradun', state: 'Uttarakhand'}
68
: 
{_id: '64c374bba31bb14940e7b298', id: '69', name: 'Udaipur', state: 'Rajasthan'}
69
: 
{_id: '64c374bba31bb14940e7b299', id: '73', name: 'Nanded-Waghala', state: 'Maharashtra'}
70
: 
{_id: '64c374bba31bb14940e7b29a', id: '74', name: 'Ajmer', state: 'Rajasthan'}
71
: 
{_id: '64c374bba31bb14940e7b29b', id: '72', name: 'Asansol', state: 'West Bengal'}
72
: 
{_id: '64c374bba31bb14940e7b29c', id: '75', name: 'Jamnagar', state: 'Gujarat'}
73
: 
{_id: '64c374bba31bb14940e7b29d', id: '76', name: 'Ujjain', state: 'Madhya Pradesh'}
74
: 
{_id: '64c374bba31bb14940e7b29e', id: '77', name: 'Sangli', state: 'Maharashtra'}
75
: 
{_id: '64c374bba31bb14940e7b29f', id: '78', name: 'Loni', state: 'Uttar Pradesh'}
76
: 
{_id: '64c374bba31bb14940e7b2a0', id: '79', name: 'Jhansi', state: 'Uttar Pradesh'}
77
: 
{_id: '64c374bba31bb14940e7b2a1', id: '80', name: 'Pondicherry', state: 'Puducherry'}
78
: 
{_id: '64c374bba31bb14940e7b2a2', id: '82', name: 'Jammu', state: 'Jammu and Kashmir'}
79
: 
{_id: '64c374bba31bb14940e7b2a3', id: '81', name: 'Nellore', state: 'Andhra Pradesh'}
80
: 
{_id: '64c374bba31bb14940e7b2a4', id: '84', name: 'Raurkela', state: 'Odisha'}
81
: 
{_id: '64c374bba31bb14940e7b2a5', id: '83', name: 'Belagavi', state: 'Karnataka'}
82
: 
{_id: '64c374bba31bb14940e7b2a6', id: '85', name: 'Mangaluru', state: 'Karnataka'}
83
: 
{_id: '64c374bba31bb14940e7b2a7', id: '86', name: 'Tirunelveli', state: 'Tamil Nadu'}
84
: 
{_id: '64c374bba31bb14940e7b2a8', id: '87', name: 'Malegaon', state: 'Maharashtra'}
85
: 
{_id: '64c374bba31bb14940e7b2a9', id: '89', name: 'Tiruppur', state: 'Tamil Nadu'}
86
: 
{_id: '64c374bba31bb14940e7b2aa', id: '88', name: 'Gaya', state: 'Bihar'}
87
: 
{_id: '64c374bba31bb14940e7b2ab', id: '90', name: 'Davanagere', state: 'Karnataka'}
88
: 
{_id: '64c374bba31bb14940e7b2ac', id: '92', name: 'Akola', state: 'Maharashtra'}
89
: 
{_id: '64c374bba31bb14940e7b2ad', id: '93', name: 'Kurnool', state: 'Andhra Pradesh'}
90
: 
{_id: '64c374bba31bb14940e7b2ae', id: '94', name: 'Bokaro Steel City', state: 'Jharkhand'}
91
: 
{_id: '64c374bba31bb14940e7b2af', id: '91', name: 'Kozhikode', state: 'Kerala'}
92
: 
{_id: '64c374bba31bb14940e7b2b0', id: '95', name: 'Rajahmundry', state: 'Andhra Pradesh'}
93
: 
{_id: '64c374bba31bb14940e7b2b1', id: '96', name: 'Ballari', state: 'Karnataka'}
94
: 
{_id: '64c374bba31bb14940e7b2b2', id: '97', name: 'Agartala', state: 'Tripura'}
95
: 
{_id: '64c374bba31bb14940e7b2b3', id: '99', name: 'Latur', state: 'Maharashtra'}
96
: 
{_id: '64c374bba31bb14940e7b2b4', id: '98', name: 'Bhagalpur', state: 'Bihar'}
97
: 
{_id: '64c374bba31bb14940e7b2b5', id: '62', name: 'Amravati', state: 'Maharashtra'}
98
: 
{_id: '64c374bba31bb14940e7b2b6', id: '101', name: 'Korba', state: 'Chhattisgarh'}
99
: 
{_id: '64c374bba31bb14940e7b2b7', id: '102', name: 'Bhilwara', state: 'Rajasthan'}
*/