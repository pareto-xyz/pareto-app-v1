


// TODO fill this in with a backend call
export const getStrikePrices = (optionType: string | null) => {
    return [
        1800,
        1700,
        1600,
        1200,
    ]
};

// TODO replace this with a call to the backend
export const getOptionInfo = (optionType: string | null, optionStrikePrice: number | null) => {
    return {
        price: 1,
        breakEvenPrice: 2,
        impliedVolitility: 3,
        bid: 4,
        ask: 5,
        openInterest: 6,
        delta: 7,
        vega: 8,
        gamma: 9,
        theta: 10,
        rho: 11,
        marginRequirement: 12,
    }
};

// TODO replace this with a call to the backend
export const getAccountInfo = (walletAddress: string | undefined | null) => {
    return {
        availableBalance: 1,
        unrealizedPNL: 2,
        totalMaintenenceMargin: 3,
        totalInitialMargin: 4,
        liquidationBuffer: 5,
        totalMarginAccountBalance: 6,
    };
};


// TODO replace this with a backend call
export const getAccountPositions = (walletAddress: string | null | undefined) => {
    return [
        {
            contractType: 'Call',
            side: 'Short',
            strike: 2,
            expiry: new Date(Date.now()).toDateString(),
            quantity: 4,
            entryPrice: 5,
            currentPrice: 6,
            unrealizedPnL: 7,
        },
        {
            contractType: 'Call',
            side: 'Long',
            strike: 2,
            expiry: new Date(Date.now()).toDateString(),
            quantity: 4,
            entryPrice: 5,
            currentPrice: 6,
            unrealizedPnL: 7,
        },
        {
            contractType: 'Call',
            side: 'Short',
            strike: 2,
            expiry: new Date(Date.now()).toDateString(),
            quantity: 4,
            entryPrice: 5,
            currentPrice: 6,
            unrealizedPnL: 7,
        },
    ]
}

// TODO replace this with a backend call
export const getAccountSettlementHistory = (walletAddress: string | null | undefined) => {
    return [
        {
            priceAtSettlement: 2,
            settlementTimestamp: new Date(Date.now()).toDateString(),
        },
        {
            priceAtSettlement: 2,
            settlementTimestamp: new Date(Date.now()).toDateString(),
        },
        {
            priceAtSettlement: 2,
            settlementTimestamp: new Date(Date.now()).toDateString(),
        },
    ]
}

// TODO replace this with a backend call
export const getAccountTradeHistory = (walletAddress: string | null | undefined) => {
    return [
        {
            contractType: 'Call',
            side: 'Short',
            strike: 2,
            expiry: new Date(Date.now()).toDateString(),
            quantity: 4,
            entryPrice: 5,
            timestamp: new Date(Date.now()).toDateString(),
        },
        {
            contractType: 'Call',
            side: 'Long',
            strike: 2,
            expiry: new Date(Date.now()).toDateString(),
            quantity: 4,
            entryPrice: 5,
            timestamp: new Date(Date.now()).toDateString(),
        },
        {
            contractType: 'Call',
            side: 'Short',
            strike: 2,
            expiry: new Date(Date.now()).toDateString(),
            quantity: 4,
            entryPrice: 5,
            timestamp: new Date(Date.now()).toDateString(),
        },
    ]
}

// TODO replace this with a call to the backend
export const getBalance = (walletAddress: string | null | undefined) => {
    return walletAddress === null || walletAddress === undefined ? 100.00 : 10000.00;
}


// TODO replace this with a call to the backend
export const getDates = () => {
    return [
        { id: 1, name: 'Friday 16 Sept, 8am', unavailable: false },
        { id: 2, name: 'Monday 19 Sept, 8am', unavailable: false },
        { id: 3, name: 'Friday 23 Sept, 8am', unavailable: false },
        { id: 4, name: 'Monday 26 Sept, 8am', unavailable: false },
    ]
};

// TODO fill this in with a backend request for ETH price data
export const getData = (ohlc: boolean, scale: string) => {
    const rawData = [
        {
            open: 1323.0825070478643,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1277.0643342828469,
            high: 1328.951237337289,
            low: 1267.482688441193,
            close: 1324.1141101124128,
        },
        {
            open: 1275.3573058332477,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1311.032589024571,
            high: 1316.9766330768007,
            low: 1273.2013719633194,
            close: 1275.0042689311078,
        },
        {
            open: 1311.7066866884604,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1328.1916264461313,
            high: 1333.7898612336567,
            low: 1304.0496035232113,
            close: 1311.150404896928,
        },
        {
            open: 1328.5743499166724,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1336.3431579484932,
            high: 1370.0496117995972,
            low: 1316.9976324010045,
            close: 1327.6159491770356,
        },
        {
            open: 1336.0376779060985,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1337.3842758264748,
            high: 1350.0866257176522,
            low: 1292.5867202822242,
            close: 1335.7960670305465,
        },
        {
            open: 1337.7270344612314,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1329.7476322217299,
            high: 1354.7585624053572,
            low: 1267.331421873231,
            close: 1336.781095034983,
        },
        {
            open: 1330.546571915334,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1336.7102408019282,
            high: 1398.9039869953217,
            low: 1305.4029205834934,
            close: 1330.5281256941182,
        },
        {
            open: 1337.6634718037783,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1294.5249552219345,
            high: 1339.4366188855124,
            low: 1281.7064334124473,
            close: 1337.2775435716806,
        },
        {
            open: 1317.2524795030802,
            high: 1336.043589981195,
            low: 1272.6329880633928,
            close: 1293.4041044665773,
        },
        {
            open: 1326.9921694622064,
            high: 1348.3132971222767,
            low: 1309.2586659777487,
            close: 1317.5171593258851,
        },
        {
            open: 1326.488748048819,
            high: 1355.75561533966,
            low: 1262.9265179216325,
            close: 1329.03724555718,
        },
        {
            open: 1245.8250350130177,
            high: 1346.1938126691914,
            low: 1238.096004207977,
            close: 1326.2709163941643,
        },
        {
            open: 1322.902978137532,
            high: 1390.906340200411,
            low: 1223.5162117813115,
            close: 1252.1882488411375,
        },
        {
            open: 1376.185631620588,
            high: 1383.2492238629136,
            low: 1314.9116878805094,
            close: 1323.271748054805,
        },
        {
            open: 1334.6909923737576,
            high: 1391.6550240213694,
            low: 1288.0418459668429,
            close: 1374.8859203783977,
        },
        {
            open: 1469.0241277621687,
            high: 1469.0241277621687,
            low: 1328.2503912067623,
            close: 1334.4777149252425,
        },
        {
            open: 1433.820488485609,
            high: 1474.4996838106133,
            low: 1411.6310627567707,
            close: 1469.7009149241123,
        },
        {
            open: 1472.997803431507,
            high: 1482.889985068042,
            low: 1412.566442705742,
            close: 1432.1931970589576,
        },
        {
            open: 1638.804004663154,
            high: 1650.9820988723877,
            low: 1460.9508150778715,
            close: 1472.6703343500992,
        },
        {
            open: 1574.7347025111728,
            high: 1646.961997058266,
            low: 1558.483824789094,
            close: 1637.3582458469164,
        },
        {
            open: 1717.6024825063278,
            high: 1753.4061538632968,
            low: 1565.768457396024,
            close: 1573.0557684952569,
        },
        {
            open: 1716.6109451144562,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1763.2742358495161,
            high: 1780.775861788811,
            low: 1694.2781435089394,
            close: 1716.6340455097384,
        },
        {
            open: 1763.8271993752453,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1777.0547183808733,
            high: 1787.6662197969433,
            low: 1723.0369218523267,
            close: 1763.095384544823,
        },
        {
            open: 1776.1269952373484,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1717.763159328917,
            high: 1786.7869004883698,
            low: 1709.7875427068595,
            close: 1776.1331420328415,
        },
        {
            open: 1720.6416417093633,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1634.047783920546,
            high: 1743.1252853321637,
            low: 1632.994127676348,
            close: 1721.0492985490816,
        },
        {
            open: 1635.5397731555229,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1630.7,
            high: 1658.3999999999999,
            low: 1597.92192222,
            close: 1635.8205439371159,
        },
        {
            open: 1630.1,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1557.0708112099999,
            high: 1654.55588987,
            low: 1494.7999999999997,
            close: 1628.9,
        },
        {
            open: 1557.8,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1619.3641529336876,
            high: 1683.025693884315,
            low: 1559.4491676047196,
            close: 1560.5,
        },
        {
            open: 1616.0455572713286,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1579.825745014927,
            high: 1623.7903602864358,
            low: 1557.5242810230832,
            close: 1617.79588369885,
        },
        {
            open: 1578.2375815219482,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1556.9055489267726,
            high: 1579.3247955576664,
            low: 1542.7240843992902,
            close: 1578.9804942381672,
        },
        {
            open: 1557.611935182749,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1574.0529952662835,
            high: 1581.0078956938485,
            low: 1536.271774130086,
            close: 1558.276408403582,
        },
        {
            open: 1577.1227575762587,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1583.9437683657702,
            high: 1646.4126380374369,
            low: 1546.8864586860384,
            close: 1578.3631172558303,
        },
        {
            open: 1586.0266400857847,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1552.8630370252922,
            high: 1596.355005430569,
            low: 1518.120146411211,
            close: 1585.7438628329182,
        },
        {
            open: 1554.8190876383524,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1524.69076825918,
            high: 1615.6213521967522,
            low: 1524.69076825918,
            close: 1553.8729630429875,
        },
        {
            open: 1551.8285256209679,
            high: 1603.7369482320569,
            low: 1477.9122842592305,
            close: 1520.507711489201,
        },
        {
            open: 1426.6125924697458,
            high: 1559.8079017741861,
            low: 1426.0099476220682,
            close: 1554.1310257885978,
        },
        {
            open: 1491.3429050388534,
            high: 1507.4541296659988,
            low: 1424.132652382681,
            close: 1424.132652382681,
        },
        {
            open: 1508.200022853274,
            high: 1518.7628370175992,
            low: 1449.815194201472,
            close: 1489.9393221326816,
        },
        {
            open: 1692.6795928168501,
            high: 1702.69,
            low: 1494.6061633622169,
            close: 1508.6475324190708,
        },
        {
            open: 1697.35,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1658.03,
            high: 1719.9300000000003,
            low: 1657.44,
            close: 1697.050157523356,
        },
        {
            open: 1656.6399999999999,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1663.44,
            high: 1689.1885063199045,
            low: 1605.93,
            close: 1658.23,
        },
        {
            open: 1663.73142944295,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1623.93,
            high: 1668.7522630782098,
            low: 1565.2590004066922,
            close: 1663.9414255291936,
        },
        {
            open: 1624.9903085928581,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1617.84,
            high: 1627.3344560968897,
            low: 1530.4164710897494,
            close: 1627.11858357258,
        },
        {
            open: 1576.6520894467035,
            high: 1645.3967238685304,
            low: 1566.7462548700576,
            close: 1618.576667583729,
        },
        {
            open: 1575.1526382952275,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1610.61,
            high: 1656.2475329465717,
            low: 1530.7149863642253,
            close: 1576.5264933715666,
        },
        {
            open: 1611.259010546798,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1844.5507971863058,
            high: 1844.5507971863058,
            low: 1607.5261612412285,
            close: 1611.047593935532,
        },
        {
            open: 1846.9986868850108,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1835.1622153763153,
            high: 1879.8741881739134,
            low: 1821.9877611164989,
            close: 1846.4905052621828,
        },
        {
            open: 1834.506988977499,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1878.1357825770804,
            high: 1954.8095286789196,
            low: 1820.3151610956907,
            close: 1832.73,
        },
        {
            open: 1877.9968529073728,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1897.1214152142081,
            high: 1914.6553721523,
            low: 1854.0023821371199,
            close: 1878.423401035227,
        },
        {
            open: 1899.01789080248,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1935.3193758982427,
            high: 2011.1414817657035,
            low: 1874.0883234574007,
            close: 1904.5985661521477,
        },
        {
            open: 1935.4314096494868,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1982.9857509769745,
            high: 2025.2407912979977,
            low: 1912.1143667636095,
            close: 1936.9593965161862,
        },
        {
            open: 1984.3759693003944,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1959.8280248756048,
            high: 2019.559796622542,
            low: 1948.356985198561,
            close: 1981.292126561297,
        },
        {
            open: 1881.0736857263357,
            high: 1963.3351348981666,
            low: 1856.9302164299022,
            close: 1961.8912855514998,
        },
        {
            open: 1854.1540844236854,
            high: 1931.336651610177,
            low: 1852.6750341496431,
            close: 1882.7047637039666,
        },
        {
            open: 1852.9311426089357,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1701.5770101806731,
            high: 1884.0708549653375,
            low: 1663.538415076803,
            close: 1851.9202315375667,
        },
        {
            open: 1702.3315508207888,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1777.8,
            high: 1788.4,
            low: 1669.9999999999998,
            close: 1703.6888086707906,
        },
        {
            open: 1778.48395691,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1699.8,
            high: 1809.5,
            low: 1694.3,
            close: 1774.6000000000001,
        },
        {
            open: 1700.08770495,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1689.5,
            high: 1727.35737218,
            low: 1669.50571572,
            close: 1697.9,
        },
        {
            open: 1688.2,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1736.62653044,
            high: 1747.1,
            low: 1686.26824792,
            close: 1689.6,
        },
        {
            open: 1607.8,
            high: 1737.9,
            low: 1605.49087231,
            close: 1735.3,
        },
        {
            open: 1606.24511964,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1615.9999999999998,
            high: 1657.4999999999998,
            low: 1579.2,
            close: 1607.6,
        },
        {
            open: 1618.0059291,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1632.7,
            high: 1682.1,
            low: 1590.4,
            close: 1618.42272978,
        },
        {
            open: 1630,
            high: undefined,
            low: undefined,
            close: undefined,
        },
        {
            open: 1629.7546445327212,
            high: 1676.7,
            low: 1563.75296461,
            close: 1630.2000000000003,
        },
        {
            open: 1679.3223009834016,
            high: 1703.531840215231,
            low: 1610,
            close: 1628.44135074,
        },
        {
            open: 1697.4176695344265,
            high: 1750.725776228286,
            low: 1670.558607212973,
            close: 1681.9244430445603,
        },
        {
            open: 1722.1007375114511,
            high: 1742.7750100244696,
            low: 1677.4079498299127,
            close: 1697.079476072964,
        },
        {
            open: 1725.257783782584,
            high: 1765.0992600638533,
            low: 1659.8511305886939,
            close: 1724.72291250507,
        },
        {
            open: 1636.3954063940648,
            high: 1781.0185638199496,
            low: 1601.0014991361454,
            close: 1726.1809874117353,
        },
        {
            open: 1449.8261631784453,
            high: 1641.3065590743774,
            low: 1421.5125352127477,
            close: 1638.1685011677134,
        },
        {
            open: 1440.5195470775332,
            high: 1445.969990839652,
            low: 1360.0685463329478,
            close: 1445.969990839652,
        },
        {
            open: 1597.9416534726706,
            high: 1607.3922384021068,
            low: 1438.586371677737,
            close: 1438.586371677737,
        },
        {
            open: 1549.1713863488992,
            high: 1660.7464409036006,
            low: 1548.0058844448574,
            close: 1598.043374297202,
        },
        {
            open: 1535.7188268991604,
            high: 1596.2720906392458,
            low: 1491.4243468621155,
            close: 1549.6017675898856,
        },
        {
            open: 1575.6924154210574,
            high: 1642.8202794698589,
            low: 1520.9622201692632,
            close: 1537.7971730168574,
        },
        {
            open: 1522.0471126523823,
            high: 1599.8816102578157,
            low: 1464.4657058281257,
            close: 1575.9180231607863,
        },
        {
            open: 1542.5820380458833,
            high: 1614.4388195288245,
            low: 1496.020626061831,
            close: 1517.9234870701764,
        },
        {
            open: 1581.5556046624185,
            high: 1624.265174989632,
            low: 1493.6837381350138,
            close: 1543.2970387020457,
        },
        {
            open: 1338.2095222915507,
            high: 1586.1080790572175,
            low: 1336.9272948742596,
            close: 1586.1080790572175,
        },
        {
            open: 1355.8462170966113,
            high: 1381.8567157803864,
            low: 1325.5069357136736,
            close: 1335.0994467906048,
        },
        {
            open: 1231.092020213364,
            high: 1384.170213047164,
            low: 1192.9120564740808,
            close: 1353.0020191330348,
        },
        {
            open: 1192.6062900504553,
            high: 1282.9431177793606,
            low: 1181.6824398356036,
            close: 1231.7984733883595,
        },
        {
            open: 1114.6138976460325,
            high: 1209.3770310070145,
            low: 1073.6560418798158,
            close: 1192.247318666498,
        },
        {
            open: 1037.2319434055335,
            high: 1116.1396107215471,
            low: 1011.2329353735203,
            close: 1116.1396107215471,
        },
        {
            open: 1095.5819856261926,
            high: 1096.5267242714722,
            low: 1035.2713489751118,
            close: 1035.2713489751118,
        },
        {
            open: 1167.6950700411435,
            high: 1170.040180316866,
            low: 1091.9278998451246,
            close: 1095.3967177622726,
        },
        {
            open: 1216.7478840575204,
            high: 1218.6528792543943,
            low: 1156.0030209255049,
            close: 1167.5918524559067,
        },
        {
            open: 1213.423547018803,
            high: 1229.924476325197,
            low: 1204.8263200978656,
            close: 1217.503958727564,
        },
        {
            open: 1237.0640321769883,
            high: 1273.7085107762325,
            low: 1192.571498544814,
            close: 1213.1091077907465,
        },
        {
            open: 1185.5,
            high: 1251.6771646781576,
            low: 1162.92246673,
            close: 1238.6367414149088,
        },
        {
            open: 1131.3835708745028,
            high: 1199.13242945,
            low: 1111.7370514249683,
            close: 1185.80375783,
        },
        {
            open: 1150.1098645335167,
            high: 1168.5718559848785,
            low: 1078.3949700714263,
            close: 1132.7214562566924,
        },
        {
            open: 1073.1793040084635,
            high: 1154.1879769446784,
            low: 1045.2272793433024,
            close: 1151.6919291569782,
        },
    ];

    const processed = rawData.map((val, idx) => {
        return {
            ...val,
            high: val.high === undefined ? val.open : val.high,
            low: val.low === undefined ? val.open : val.low,
            close: val.close === undefined ? val.open : val.close,
        } as {
            open: number,
            high: number,
            low: number,
            close: number,
        }
    });

    const labels = processed.map((_, idx) => (Date.UTC(2022, 7, 4, 0, 0, 0, 0) + idx * 1000 * 60 * 60 * 24));
    const data = ohlc ? processed.map((val, idx) => [labels[idx], [val.open, val.high, val.low, val.close]] as [number, number[]]) : processed.map((val, idx) => [labels[idx], val.open] as [number, number])

    let truncated_data: [number, number[]][] | [number, number][];
    switch (scale) {
        case '1D':
            truncated_data = data.slice(0, 1 * data.length / 4);
            break;
        case '1W':
            truncated_data = data.slice(0, 2 * data.length / 4);
            break;
        case '1M':
            truncated_data = data.slice(0, 3 * data.length / 4);
            break;
        case '6M':
            truncated_data = data.slice(0, 4 * data.length / 4);
            break;
        default:
            truncated_data = data
    }

    return [{
        name: 'ETH Price',
        data: truncated_data,
    }];
}


