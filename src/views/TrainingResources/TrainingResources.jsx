import YoutubeEmbed from "../../components/YouTube/YoutubeEmbed";
import TrainingVideos from "../../Data/Videos";
import "./TrainingResources.css";


export default function TrainingResources() {


return (
    <section className="training-view">
    { TrainingVideos.map((video) => (<span key={video.title}>
<h2>{video.title}</h2>
<YoutubeEmbed embedId={video.url}/>
{/* <div>{video.url}</div> */}
</span>
    )
    )} 
</section>
)

}










