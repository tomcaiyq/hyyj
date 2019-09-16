// 路由要用懒加载的方式引入，打包以后不会太卡，不然会很卡
// 有两种放是 一种是上面引入 例如const seaZai = () => import('@/components/seaZai')
// 另一种是上面不需要important引入 直接在下面配置路由里面写component:()=>import('@/components/Home')

// 导入全局的样式表
import '../assets/css/global.css'
import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 首页
const IndexHome = () =>
    import ('@/views/IndexHome')


// 灾害预警模块
// 海浪警报
const WaveWarning = () =>
    import ('@/views/warning/WaveWarning')
    // 风暴潮警报
const StormWarning = () =>
    import ('@/views/warning/StormWarning')
    // 海冰警报
const IceWarning = () =>
    import ('@/views/warning/IceWarning')
    // 海啸警报
const TsunamiWarning = () =>
    import ('@/views/warning/TsunamiWarning')


// 环境预报模块
// 海区预报
const SeaPrediction = () =>
    import ('@/views/Environmental/SeaPrediction')
    // 近岸预报       
const NearshoreForecast = () =>
    import ('@/views/Environmental/NearshoreForecast')
    // 周预报
const WeekForecast = () =>
    import ('@/views/Environmental/WeekForecast')
    // 月预报
const MonthoForecast = () =>
    import ('@/views/Environmental/MonthoForecast')
    // 县级预报
const CountyForecast = () =>
    import ('@/views/Environmental/CountyForecast')


// 滨海旅游模块
// 浴场预报 
const BathForecast = () =>
    import ('@/views/Coastal/BathForecast')
    // 度假区预报
const HolidayForecast = () =>
    import ('@/views/Coastal/HolidayForecast')
    // 旅游岛预报
const TourismForecast = () =>
    import ('@/views/Coastal/TourismForecast')
    // 国内航线预报
const DomesticForecast = () =>
    import ('@/views/Coastal/DomesticForecast')


// 渔业预报模块
// 渔场预报
const FisheryForecast = () =>
    import ('@/views/Fisheries/FisheryForecast')
    // 近海预报
const OffshoreForecast = () =>
    import ('@/views/Fisheries/OffshoreForecast')


// 港口预报模块
// 国内港口预报
const DomesticPortFor = () =>
    import ('@/views/Port/DomesticPortFor')
    // 天文潮预报
const TidePrediction = () =>
    import ('@/views/Port/TidePrediction')


// 海上丝绸之路模块
// 首页
const HesseRoadIndex = () =>
    import ('@/views/SilkRoad/HesseRoadIndex')
    // 风场
const WindField = () =>
    import ('@/views/SilkRoad/WindField')
    // 10米风场
const WindFieldTen = () =>
    import ('@/views/SilkRoad/WindFieldTen')
    // 500hPa位势高度，温度场，风场
const WindFieldFive = () =>
    import ('@/views/SilkRoad/WindFieldFive')

// 海浪
const SeaWave = () =>
    import ('@/views/SilkRoad/SeaWave')
    // 风暴潮
const StormSurge = () =>
    import ('@/views/SilkRoad/StormSurge')
    // 单站增水预报
const SingleStation = () =>
    import ('@/views/SilkRoad/SingleStation')
    //增水场预报
const IncreaseWater = () =>
    import ('@/views/SilkRoad/IncreaseWater')


// 海啸
const Tsunami = () =>
    import ('@/views/SilkRoad/Tsunami')
    // 溢油
const SpilledOil = () =>
    import ('@/views/SilkRoad/SpilledOil')
    // 搜救
const SearchFor = () =>
    import ('@/views/SilkRoad/SearchFor')
    // 三维温盐流
const ThermohalineFlow = () =>
    import ('@/views/SilkRoad/ThermohalineFlow')


// 冰上丝绸之路模块
const IceSilkRoad = () =>
    import ('@/views/IceSilkRoad')


// 专业产品模块
// 卫星反演
const SatelliteInv = () =>
    import ('@/views/Professional/SatelliteInv')
    // 极地预报
const PolarPrediction = () =>
    import ('@/views/Professional/PolarPrediction')
    // 极地实况
const PolarReality = () =>
    import ('@/views/Professional/PolarReality')
    // 气候监测
const Climate = () =>
    import ('@/views/Professional/Climate')


// 资讯互动模块
// 视频新闻
const VideoNews = () =>
    import ('@/views/AdvisoryInteraction/VideoNews')
    // 视频新闻---查看更多页面
const VideoMore = () =>
    import ('@/views/AdvisoryInteraction/VideoMore')
    // 视频新闻---查看视频播放页面
const VideoShow = () =>
    import ('@/views/AdvisoryInteraction/VideoShow')

// 海洋图片
const ImgShow = () =>
    import ('@/views/AdvisoryInteraction/ImgShow')
    // 海洋图片--查看更多页面
const ImgShowMore = () =>
    import ('@/views/AdvisoryInteraction/ImgShowMore')

// 海洋新闻
const OceanNews = () =>
    import ('@/views/AdvisoryInteraction/OceanNews')
    // 海洋新闻--文章详情
const OceanNewsDetails = () =>
    import ('@/views/AdvisoryInteraction/OceanNewsDetails')

// 百科知识
const Knowledge = () =>
    import ('@/views/AdvisoryInteraction/Knowledge')


// 关于我们
const Aboutus = () =>
    import ('@/views/Aboutus')


Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'IndexHome',
            component: IndexHome,
            redirect: "/IndexHome",
            children: [{
                path: '/IndexHome',
                component: IndexHome,
            }]
        }, {
            path: "/BathForecast",
            name: 'BathForecast',
            component: BathForecast,
            meta: { title: '浴场预报' }
        }, {
            path: "/IceSilkRoad",
            name: 'IceSilkRoad',
            component: IceSilkRoad,
            meta: { title: '冰上丝绸之路' }
        }, {
            path: "/Aboutus",
            name: 'Aboutus',
            component: Aboutus,
            meta: { title: '关于我们' }
        }, {
            path: "/WaveWarning",
            name: 'WaveWarning',
            component: WaveWarning,
            meta: { title: '海浪警报' }
        }, {
            path: "/StormWarning",
            name: 'StormWarning',
            component: StormWarning,
            meta: { title: '风暴潮警报' }
        }, {
            path: "/IceWarning",
            name: 'IceWarning',
            component: IceWarning,
            meta: { title: '海冰警报' }
        }, {
            path: "/TsunamiWarning",
            name: 'TsunamiWarning',
            component: TsunamiWarning,
            meta: { title: '海啸警报' }
        }, {
            path: "/SeaPrediction",
            name: 'SeaPrediction',
            component: SeaPrediction,
            meta: { title: '海区预报' }
        }, {
            path: "/NearshoreForecast",
            name: 'NearshoreForecast',
            component: NearshoreForecast,
            meta: { title: '近岸预报' }
        }, {
            path: "/WeekForecast",
            name: 'WeekForecast',
            component: WeekForecast,
            meta: { title: '周预报' }
        }, {
            path: "/MonthoForecast",
            name: 'MonthoForecast',
            component: MonthoForecast,
            meta: { title: '月预报' }
        }, , {
            path: "/HolidayForecast",
            name: 'HolidayForecast',
            component: HolidayForecast,
            meta: { title: '度假区预报' }
        }, {
            path: "/TourismForecast",
            name: 'TourismForecast',
            component: TourismForecast,
            meta: { title: '旅游海岛预报' }
        }, {
            path: "/DomesticForecast",
            name: 'DomesticForecast',
            component: DomesticForecast,
            meta: { title: '国内航线预报' }
        }, {
            path: "/FisheryForecast",
            name: 'FisheryForecast',
            component: FisheryForecast,
            meta: { title: '渔场预报' }
        }, {
            path: "/OffshoreForecast",
            name: 'OffshoreForecast',
            component: OffshoreForecast,
            meta: { title: '近海预报' }
        }, {
            path: "/DomesticPortFor",
            name: 'DomesticPortFor',
            component: DomesticPortFor,
            meta: { title: '国内港口预报' }
        }, {
            path: "/TidePrediction",
            name: 'TidePrediction',
            component: TidePrediction,
            meta: { title: '天文潮预报' }
        }, {
            path: "/HesseRoadIndex",
            name: 'HesseRoadIndex',
            component: HesseRoadIndex,
            meta: { title: '海上丝绸之路首页' }
        }, {
            path: "/WindField",
            name: 'WindField',
            component: WindField,
            meta: { title: '风场' },
            redirect: "/WindFieldTen",
            children: [{
                path: '/WindFieldTen',
                component: WindFieldTen,
                meta: { title: '10米风场' },
            }, {
                path: '/WindFieldFive',
                component: WindFieldFive,
                meta: { title: '500hPa位势高度、温度场、风场' },
            }]
        }, {
            path: "/SeaWave",
            name: 'SeaWave',
            component: SeaWave,
            meta: { title: '海浪' },
        }, {
            path: "/StormSurge",
            name: 'StormSurge',
            component: StormSurge,
            meta: { title: '风暴潮·' },
            redirect: '/SingleStation',
            children: [{
                path: '/SingleStation',
                component: SingleStation,
                meta: { title: '单站增水预报' },
            }, {
                path: '/IncreaseWater',
                component: IncreaseWater,
                meta: { title: '增水场预报' },
            }]
        }, {
            path: "/Tsunami",
            name: 'Tsunami',
            component: Tsunami,
            meta: { title: '海啸' }
        }, {
            path: "/SpilledOil",
            name: 'SpilledOil',
            component: SpilledOil,
            meta: { title: '溢油' }
        }, {
            path: "/SearchFor",
            name: 'SearchFor',
            component: SearchFor,
            meta: { title: '搜救' }
        }, {
            path: "/ThermohalineFlow",
            name: 'ThermohalineFlow',
            component: ThermohalineFlow,
            meta: { title: '三维温盐流' }
        }, {
            path: "/SatelliteInv",
            name: 'SatelliteInv',
            component: SatelliteInv,
            meta: { title: '卫星反演' }
        }, {
            path: "/PolarPrediction",
            name: 'PolarPrediction',
            component: PolarPrediction,
            meta: { title: '极地预报' }
        }, {
            path: "/PolarReality",
            name: 'PolarReality',
            component: PolarReality,
            meta: { title: '极地实况' }
        }, {
            path: "/Climate",
            name: 'Climate',
            component: Climate,
            meta: { title: '气候监测' }
        },
        {
            path: "/VideoNews",
            name: 'VideoNews',
            component: VideoNews,
            meta: { title: '视频新闻' }
        },
        {
            path: "/ImgShow",
            name: 'ImgShow',
            component: ImgShow,
            meta: { title: '海洋图片' }
        },
        {
            path: "/OceanNews",
            name: 'OceanNews',
            component: OceanNews,
            meta: { title: '海洋新闻' }
        },
        {
            path: "/Knowledge",
            name: 'Knowledge',
            component: Knowledge,
            meta: { title: '百科知识' }
        }, {
            path: "/VideoMore",
            name: 'VideoMore',
            component: VideoMore,
            meta: { title: '视频新闻更多' }
        }, {
            path: "/VideoShow",
            name: 'VideoShow',
            component: VideoShow,
            meta: { title: '视频播放页面' }
        }, {
            path: "/CountyForecast",
            name: 'CountyForecast',
            component: CountyForecast,
            meta: { title: '县级预报' }
        }, {
            path: "/ImgShowMore",
            name: 'ImgShowMore',
            component: ImgShowMore,
            meta: { title: '海洋图片更多页面' }
        }, {
            path: "/OceanNewsDetails",
            name: 'OceanNewsDetails',
            component: OceanNewsDetails,
            meta: { title: '海洋新闻--文章详情' }
        }
    ]
})