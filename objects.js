
const brewery = {
    "currentPage": 1,
    "data": [
        {
            "brewery": {
                "brandClassification": "craft",
                "createDate": "2015-07-29 18:42:31",
                "description": "Washington State's first and only dedicated gluten-free brewery.  Ghostfish offers a wide variety of craft beer styles produced from unusual malted grains, such as millet, brown rice, and buckwheat.",
                "established": "2012",
                "id": "Z9NueY",
                "images": {
                    "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/Z9NueY/upload_GAzuHB-icon.png",
                    "large": "https://s3.amazonaws.com/brewerydbapi/brewery/Z9NueY/upload_GAzuHB-large.png",
                    "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/Z9NueY/upload_GAzuHB-medium.png",
                    "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/Z9NueY/upload_GAzuHB-squareLarge.png",
                    "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/Z9NueY/upload_GAzuHB-squareMedium.png"
                },
                "isMassOwned": "N",
                "isOrganic": "N",
                "name": "Ghostfish Brewing Company",
                "nameShortDisplay": "Ghostfish",
                "status": "verified",
                "statusDisplay": "Verified",
                "updateDate": "2017-06-15 14:15:54",
                "website": "http://ghostfishbrewing.com"
            },
            "breweryId": "Z9NueY",
            "country": {
                "createDate": "2012-01-03 02:41:33",
                "displayName": "United States",
                "isoCode": "US",
                "isoThree": "USA",
                "name": "UNITED STATES",
                "numberCode": 840
            },
            "countryIsoCode": "US",
            "createDate": "2015-07-29 18:42:32",
            "id": "ZxxPpM",
            "inPlanning": "N",
            "isClosed": "N",
            "isPrimary": "N",
            "latitude": 47.5762875,
            "locality": "Seattle",
            "locationType": "micro",
            "locationTypeDisplay": "Micro Brewery",
            "longitude": -122.3338489,
            "name": "Main Brewery",
            "openToPublic": "Y",
            "postalCode": "98134",
            "region": "Washington",
            "status": "verified",
            "statusDisplay": "Verified",
            "streetAddress": "2942 1st Ave S",
            "updateDate": "2016-09-20 15:27:50",
            "website": "http://ghostfishbrewing.com"
        }
    ],
    "numberOfPages": 1,
    "status": "success",
    "totalResults": 1
};


const otherBrewery = {
    "currentPage": 1,
    "data": [
        {
            "brewery": {
                "brandClassification": "craft",
                "createDate": "2015-07-29 18:41:20",
                "id": "KVwILg",
                "images": {
                    "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/KVwILg/upload_AT61xY-icon.png",
                    "large": "https://s3.amazonaws.com/brewerydbapi/brewery/KVwILg/upload_AT61xY-large.png",
                    "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/KVwILg/upload_AT61xY-medium.png",
                    "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/KVwILg/upload_AT61xY-squareLarge.png",
                    "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/KVwILg/upload_AT61xY-squareMedium.png"
                },
                "isMassOwned": "N",
                "isOrganic": "N",
                "name": "Lucky Envelope Brewing",
                "nameShortDisplay": "Lucky Envelope",
                "status": "verified",
                "statusDisplay": "Verified",
                "updateDate": "2015-12-22 16:14:12",
                "website": "http://luckyenvelopebrewing.com"
            },
            "breweryId": "KVwILg",
            "country": {
                "createDate": "2012-01-03 02:41:33",
                "displayName": "United States",
                "isoCode": "US",
                "isoThree": "USA",
                "name": "UNITED STATES",
                "numberCode": 840
            },
            "countryIsoCode": "US",
            "createDate": "2015-07-29 18:41:21",
            "id": "LKVnWU",
            "inPlanning": "N",
            "isClosed": "N",
            "isPrimary": "N",
            "latitude": 47.6648778,
            "locality": "Seattle",
            "locationType": "micro",
            "locationTypeDisplay": "Micro Brewery",
            "longitude": -122.3691164,
            "name": "Main Brewery",
            "openToPublic": "Y",
            "postalCode": "98107",
            "region": "Washington",
            "status": "verified",
            "statusDisplay": "Verified",
            "streetAddress": "907 NW 50th St",
            "updateDate": "2016-09-20 15:27:48",
            "website": "http://luckyenvelopebrewing.com"
        }
    ],
    "numberOfPages": 1,
    "status": "success",
    "totalResults": 1
};



const beers = {
    "data": [
        {
            "available": {
                "description": "Limited availability.",
                "id": 2,
                "name": "Limited"
            },
            "availableId": 2,
            "createDate": "2015-07-31 20:13:24",
            "description": "This boundary-pushing beer defies all traditional style categories!  Brewed with honey and agave nectar, it almost matches a white wine in its pale color.  Hopped with massive amounts of German Hallertauer Blanc hops, as well as Citra, Santiam, and Lemondrop, it has a complex white wine aroma, with notes of gooseberry, melon, and white grape…but make no mistake, there are no grapes used in this beer!",
            "id": "JFsQp3",
            "isOrganic": "N",
            "name": "Chardonnale",
            "nameDisplay": "Chardonnale",
            "status": "verified",
            "statusDisplay": "Verified",
            "style": {
                "abvMax": "12",
                "abvMin": "2.5",
                "category": {
                    "createDate": "2012-03-21 20:06:46",
                    "id": 11,
                    "name": "Hybrid/mixed Beer"
                },
                "categoryId": 11,
                "createDate": "2012-03-21 20:06:46",
                "description": "These beers are brewed using honey in addition to malted barley. Beers may be brewed to a traditional style or may be experimental. Character of honey should be evident in flavor and aroma and balanced with the other components without overpowering them. A statement by the brewer explaining the classic or other style of the beer, and the type of honey used is essential in order for fair assessment in competitions.",
                "fgMax": "1.03",
                "fgMin": "1.006",
                "ibuMax": "100",
                "id": 126,
                "name": "Specialty Honey Lager or Ale",
                "ogMin": "1.03",
                "shortName": "Honey Beer",
                "srmMax": "100",
                "srmMin": "1",
                "updateDate": "2015-04-07 15:45:03"
            },
            "styleId": 126,
            "updateDate": "2015-07-31 20:13:25"
        },
        {
            "available": {
                "description": "Limited availability.",
                "id": 2,
                "name": "Limited"
            },
            "availableId": 2,
            "createDate": "2015-07-31 20:12:30",
            "description": "Saisons are a traditional Franco-Belgian farmhouse beer, brewed to be refreshing during the hot months of the year.  Ours is brewed from malted millet, malted buckwheat, rice, and demerera sugar, and spiced with pink peppercorns and elderflowers.  Complex floral and fruity aroma with characteristic Belgian funk, with a dry finish and a slight hint of spicy heat from the peppercorns.",
            "id": "gw9cfc",
            "isOrganic": "N",
            "name": "Eldritch Fire Saison",
            "nameDisplay": "Eldritch Fire Saison",
            "status": "verified",
            "statusDisplay": "Verified",
            "style": {
                "abvMax": "8.5",
                "abvMin": "4.5",
                "category": {
                    "createDate": "2012-03-21 20:06:46",
                    "id": 5,
                    "name": "Belgian And French Origin Ales"
                },
                "categoryId": 5,
                "createDate": "2012-03-21 20:06:46",
                "description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
                "fgMax": "1.016",
                "fgMin": "1.004",
                "ibuMax": "40",
                "ibuMin": "20",
                "id": 72,
                "name": "French & Belgian-Style Saison",
                "ogMin": "1.055",
                "shortName": "Saison",
                "srmMax": "14",
                "srmMin": "4",
                "updateDate": "2015-04-07 15:34:55"
            },
            "styleId": 72,
            "updateDate": "2015-07-31 20:12:30"
        },
        {
            "abv": "5.5",
            "available": {
                "description": "Available year round as a staple beer.",
                "id": 1,
                "name": "Year Round"
            },
            "availableId": 1,
            "createDate": "2015-07-31 20:09:25",
            "description": "American IPAs are known for their citrusy hop punch, but we cranked up the juice on this one! Brewed with grapefruit peel and a mysterious new hop codenamed “Experimental Grapefruit”, this IPA is a serious citrus bomb. Lively and bright, bracingly bitter, and eminently refreshing, you’ll wish it grew on trees!",
            "ibu": "85",
            "id": "DfGO3s",
            "isOrganic": "N",
            "labels": {
                "icon": "https://s3.amazonaws.com/brewerydbapi/beer/DfGO3s/upload_uiMKBY-icon.png",
                "large": "https://s3.amazonaws.com/brewerydbapi/beer/DfGO3s/upload_uiMKBY-large.png",
                "medium": "https://s3.amazonaws.com/brewerydbapi/beer/DfGO3s/upload_uiMKBY-medium.png"
            },
            "name": "Grapefruit IPA",
            "nameDisplay": "Grapefruit IPA",
            "status": "verified",
            "statusDisplay": "Verified",
            "style": {
                "abvMax": "7.5",
                "abvMin": "6.3",
                "category": {
                    "createDate": "2012-03-21 20:06:45",
                    "id": 3,
                    "name": "North American Origin Ales"
                },
                "categoryId": 3,
                "createDate": "2012-03-21 20:06:45",
                "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                "fgMax": "1.018",
                "fgMin": "1.012",
                "ibuMax": "70",
                "ibuMin": "50",
                "id": 30,
                "name": "American-Style India Pale Ale",
                "ogMin": "1.06",
                "shortName": "American IPA",
                "srmMax": "14",
                "srmMin": "6",
                "updateDate": "2015-04-07 15:26:37"
            },
            "styleId": 30,
            "updateDate": "2017-06-21 19:24:01"
        },
        {
            "createDate": "2016-02-12 09:36:11",
            "id": "hi5wXp",
            "isOrganic": "N",
            "name": "Peak Buster Double IPA",
            "nameDisplay": "Peak Buster Double IPA",
            "status": "verified",
            "statusDisplay": "Verified",
            "style": {
                "abvMax": "10.5",
                "abvMin": "7.5",
                "category": {
                    "createDate": "2012-03-21 20:06:45",
                    "id": 3,
                    "name": "North American Origin Ales"
                },
                "categoryId": 3,
                "createDate": "2012-03-21 20:06:45",
                "description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
                "fgMax": "1.02",
                "fgMin": "1.012",
                "ibuMax": "100",
                "ibuMin": "65",
                "id": 31,
                "name": "Imperial or Double India Pale Ale",
                "ogMin": "1.075",
                "shortName": "Imperial IPA",
                "srmMax": "13",
                "srmMin": "5",
                "updateDate": "2015-04-07 15:26:46"
            },
            "styleId": 31,
            "updateDate": "2016-02-12 16:34:26"
        },
        {
            "createDate": "2015-07-31 20:11:07",
            "description": "A hazy golden body capped with a snowy head. A wintry burst of juniper and citrus, on an updraft of Belgian-style aromatics. This beer was our “Everest”–a proper witbier, without wheat or barley! Through a feat of determination worthy of a mountaineer, we proved it was possible, and now we invite you to join us on the Summit.",
            "id": "4cQoWB",
            "isOrganic": "N",
            "labels": {
                "icon": "https://s3.amazonaws.com/brewerydbapi/beer/4cQoWB/upload_ljjtct-icon.png",
                "large": "https://s3.amazonaws.com/brewerydbapi/beer/4cQoWB/upload_ljjtct-large.png",
                "medium": "https://s3.amazonaws.com/brewerydbapi/beer/4cQoWB/upload_ljjtct-medium.png"
            },
            "name": "Shrouded Summit",
            "nameDisplay": "Shrouded Summit",
            "status": "verified",
            "statusDisplay": "Verified",
            "style": {
                "abvMax": "5.2",
                "abvMin": "4.8",
                "category": {
                    "createDate": "2012-03-21 20:06:46",
                    "id": 5,
                    "name": "Belgian And French Origin Ales"
                },
                "categoryId": 5,
                "createDate": "2012-03-21 20:06:46",
                "description": "Belgian white ales are very pale in color and are brewed using unmalted wheat and malted barley and are spiced with coriander and orange peel. Coriander and light orange peel aroma should be perceived as such or as an unidentified spiciness. Phenolic spiciness and yeast flavors may be evident at mild levels. These beers are traditionally bottle conditioned and served cloudy. An unfiltered starch and yeast haze should be part of the appearance. The low to medium body should have some degree of creaminess from wheat starch. The style is further characterized by the use of noble-type hops to achieve low hop bitterness and little to no apparent hop flavor. This beer has no diacetyl and a low to medium fruity-ester level. Mild acidity is appropriate.",
                "fgMax": "1.01",
                "fgMin": "1.006",
                "ibuMax": "17",
                "ibuMin": "10",
                "id": 65,
                "name": "Belgian-Style White (or Wit) / Belgian-Style Wheat",
                "ogMin": "1.044",
                "shortName": "Witbier",
                "srmMax": "4",
                "srmMin": "2",
                "updateDate": "2015-04-07 15:32:30"
            },
            "styleId": 65,
            "updateDate": "2015-12-18 02:34:55"
        },
        {
            "createDate": "2015-07-31 20:10:37",
            "description": "For our take on the classic American pale ale, we decided to throw inhibition to the wind and jump in with both feet. With three types of artisan gluten-free millet malt and four varieties of Washington-grown hops, one sip will make your preconceptions about gluten-free beer Vanish into the great beyond!\r\n\r\nWINNER: GOLD MEDAL \r\nGluten Free Beer, 2015 U.S. Open",
            "id": "SIi0Mk",
            "isOrganic": "N",
            "labels": {
                "icon": "https://s3.amazonaws.com/brewerydbapi/beer/SIi0Mk/upload_UhGyD5-icon.png",
                "large": "https://s3.amazonaws.com/brewerydbapi/beer/SIi0Mk/upload_UhGyD5-large.png",
                "medium": "https://s3.amazonaws.com/brewerydbapi/beer/SIi0Mk/upload_UhGyD5-medium.png"
            },
            "name": "Vanishing Point",
            "nameDisplay": "Vanishing Point",
            "status": "verified",
            "statusDisplay": "Verified",
            "style": {
                "abvMax": "5.6",
                "abvMin": "4.5",
                "category": {
                    "createDate": "2012-03-21 20:06:45",
                    "id": 3,
                    "name": "North American Origin Ales"
                },
                "categoryId": 3,
                "createDate": "2012-03-21 20:06:45",
                "description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
                "fgMax": "1.014",
                "fgMin": "1.008",
                "ibuMax": "42",
                "ibuMin": "30",
                "id": 25,
                "name": "American-Style Pale Ale",
                "ogMin": "1.044",
                "shortName": "American Pale",
                "srmMax": "14",
                "srmMin": "6",
                "updateDate": "2015-04-07 15:25:18"
            },
            "styleId": 25,
            "updateDate": "2015-12-18 04:29:18"
        },
        {
            "createDate": "2015-07-31 20:10:02",
            "description": "It has been a long, dark time for those thirsting for a gluten-free stout. But behold, a new light blazes, and from that light comes…darkness! This rich and roasty ale is made from 5 different roasts of artisan gluten-free millet malt, for a complex and satisfying true stout flavor. Now everyone can walk safely through beer’s shadowy side, thanks to the Watchstander!",
            "id": "pyzCDJ",
            "isOrganic": "N",
            "labels": {
                "icon": "https://s3.amazonaws.com/brewerydbapi/beer/pyzCDJ/upload_6UuFWC-icon.png",
                "large": "https://s3.amazonaws.com/brewerydbapi/beer/pyzCDJ/upload_6UuFWC-large.png",
                "medium": "https://s3.amazonaws.com/brewerydbapi/beer/pyzCDJ/upload_6UuFWC-medium.png"
            },
            "name": "Watchstander",
            "nameDisplay": "Watchstander",
            "status": "verified",
            "statusDisplay": "Verified",
            "style": {
                "abvMax": "8.8",
                "abvMin": "5.7",
                "category": {
                    "createDate": "2012-03-21 20:06:45",
                    "id": 3,
                    "name": "North American Origin Ales"
                },
                "categoryId": 3,
                "createDate": "2012-03-21 20:06:46",
                "description": "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
                "fgMax": "1.022",
                "fgMin": "1.01",
                "ibuMax": "60",
                "ibuMin": "35",
                "id": 42,
                "name": "American-Style Stout",
                "ogMin": "1.05",
                "shortName": "American Stout",
                "srmMax": "40",
                "srmMin": "40",
                "updateDate": "2015-04-07 15:28:43"
            },
            "styleId": 42,
            "updateDate": "2015-12-18 03:19:58"
        }
    ],
    "message": "Request Successful",
    "status": "success"
}
