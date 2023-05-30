const video = require('./video');    


Object.defineProperties(
    exports,
    {
        makeSRorNOTI: {
            value: () => {
                let dataArr = [];
                let seriesInfo = setSeriesInfo();
                let seriesVideo = getSeriesVideo();

                for(let videoPath of seriesVideo) {
                    let data = {};

                    let cid = rand(1,10000),
                        wtcid = rand(0,WRK_TYPE_CD.length-1);
                    
                    data.cc_conts_id = 'SR-TEST-'+cid;
                    data.cc_conts_nm = 'SR-TEST-NM-'+cid;
                    data.cc_sers_id = seriesInfo.sers_id;
                    data.cc_sers_nm = seriesInfo.sers_nm;
                    data.org_url_path = videoPath;
                    data.genre_display = seriesInfo.genre_display;
                    data.detail_genre_display = seriesInfo.detail_genre_display;
                    data.mrk_type = seriesInfo.mrk_type;
                    data.wrk_type_cd = WRK_TYPE_CD[wtcid];

                    dataArr.push(data);
                }
                

                return dataArr;
                
            }
        },
        makeKIDS: {
            value: () => {
                let dataArr = [];
                let seriesInfo = setSeriesInfo();
                let kizVideo = getFolderVideo('kiz');

                for(let videoPath of kizVideo) {
                    let data = {};

                    let cid = rand(1,10000);
                    
                    data.cc_contents_id = 'KIZ-TEST-'+cid;
                    data.cc_contents_nm = 'KIZ-TEST-NM-'+cid;
                    data.master_contents_id = 'MASTER-'+cid;
                    data.series_id = seriesInfo.sers_id;
                    data.series_nm = seriesInfo.sers_nm;
                    data.reading_contents_YN = 'Y',
                    data.origin_url_path = videoPath;

                    dataArr.push(data);
                }
                

                return dataArr;
            }
        },
        makePOSTER: {
            value: () => {
                let dataArr = [];
                let seriesInfo = setSeriesInfo();
                let posterVideo = getFolderVideo('movie');

                for(let videoPath of posterVideo) {
                    let data = {};

                    let cid = rand(1,10000);
                    
                    data.cc_contents_id = 'POSTER-TEST-'+cid;
                    data.cc_contents_nm = 'POSTER-TEST-NM-'+cid;
                    data.origin_url_path = videoPath;
                    data.series_id = seriesInfo.sers_id;
                    data.series_nm = seriesInfo.sers_nm;
                    data.genre_display = seriesInfo.genre_display;
                    data.detail_genre_display = seriesInfo.detail_genre_display;
                    data.image_list = makePosterList();

                    dataArr.push(data);
                }
                

                return dataArr;
            },
        },
        makeCI: {
            value: () => {
                let dataArr = [];
                let seriesInfo = setSeriesInfo();
                let faceVideo = getFolderVideo('movie');

                for(let videoPath of faceVideo) {
                    let data = {};

                    let cid = rand(1,10000);
                    
                    data.cc_contents_id = 'FACE-TEST-'+cid;
                    data.cc_contents_nm = 'FACE-TEST-NM-'+cid;
                    data.master_contents_id = 'MASTER-'+cid;
                    data.series_id = seriesInfo.sers_id;
                    data.series_nm = seriesInfo.sers_nm;
                    data.origin_url_path = videoPath;
                    data.actors_list = makeActorList();

                    dataArr.push(data);
                }
                

                return dataArr;
            }
        }
    }
)

function makeActorList() {
    let resultList = [];
    for(let i=0; i<4; i++) {
        let data = {};
        
        data.person_id = `${rand(1,100000)}`;
        data.person_nm = "PERSON-NM-"+rand(1,100000);
        data.csting_nm = "CAST-NM-"+rand(1,100000);

        resultList.push(data);
    }
    // console.table(resultList);
    return resultList;
}

function makePosterList() {
    let resultList = [];
    for(let i=0; i<6; i++) {
        let data = {};
        
        data.image_cd = ['1','2'][rand(0,1)];
        if(data.image_cd == '1') {
            data.image_type = ['IMT001', 'IMT006', 'IMT007'][rand(0,2)];
        }
        data.image_url_path = POSTER_PATH[rand(0,POSTER_PATH.length-1)];

        resultList.push(data);
    }
    // console.table(resultList);
    return resultList;
}

function getFolderVideo(folderName) {
    let VIDEOS = video.videoArr().filter(x => x.includes(folderName));

        return VIDEOS;
}

function getSeriesVideo() {
    let VIDEOS = video.videoArr().filter(x => x.includes('drama')),
        vid = rand(0,VIDEOS.length-1),
        selectedVideo = VIDEOS[vid],
        seriesName = selectedVideo.match(/drama\\(\w+)/)[1],
        resultArr = VIDEOS.filter(x => x.includes(seriesName));

        return resultArr;
}

function setSeriesInfo() {
    let seriesData = {};

    let sid = rand(1,1000),
        gcid = rand(0,GENRE_CODE.length-1),
        gdcid = rand(0,GENRE_DETAIL_CODE.length-1),
        mtid = rand(0, MRK_TYPE.length-1);

    seriesData.sers_id = 'TEST-SERIES-'+sid;
    seriesData.sers_nm = 'TEST-SERIES-NM-'+sid;
    seriesData.genre_display = GENRE_CODE[gcid];
    seriesData.detail_genre_display = GENRE_DETAIL_CODE[gdcid];
    seriesData.mrk_type = MRK_TYPE[mtid];

    return seriesData;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GENRE_CODE = ['10','11','12','13','14','15','16','17','18','19','20','21','22','90'],
    GENRE_DETAIL_CODE = ['1001','1002','1003','1004','1005','1006','1007','1008','1009','1010','1101','1102','1103',
                        '1201','1202','1203','1204','1205','1206','1207',
                        '1301','1302','1303','1304','1305','1306','1307','1308','1309','1310',
                        '1401','1402','1403','1404','1405',
                        '1501','1502','1503','1504','1505','1506','1507','1508','1509','1510','1511',
                        '1601','1602','1603','1604','1605','1606','1607','1608','1609',
                        '1701','1702','1703','1704','1705','1706',
                        '1801','1802','1803','1804','1805','1806','1807','1808','1809','1810','1811',
                        '1901','1902','1903','1904','1905','1906','1907','1908','1909','1910',
                        '2001','2002','2003','2004','2005','2101','2102',
                        '2201','2202','2203','2204','2205','2206','2207','2208','2209','2210',
                        '9001'],
    WRK_TYPE_CD = ['C', 'U', 'R'],
    MRK_TYPE = ['1', '2', '1_2'],
    POSTER_PATH = ['poster_sftp_get_test/FordVFerrari/FordVFerrari-1.jpg',
                'poster_sftp_get_test/FordVFerrari/FordVFerrari-2.jpg',
                'poster_sftp_get_test/FordVFerrari/FordVFerrari-3.jpg',
                'poster_sftp_get_test/collectors/collectors-1.jpg',
                'poster_sftp_get_test/collectors/collectors-2.jpg',
                'poster_sftp_get_test/collectors/collectors-3.jpg'];
    

