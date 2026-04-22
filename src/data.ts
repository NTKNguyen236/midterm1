import { Anime } from "./types";
import {
  spyCarousel,
  onePiece,
  boruto,
  spyCard,
  attackOnTitan,
  captainTsubasa,
  aoashi,
} from "./images";

export const animeData: Anime[] = [
  {
    id: "1",
    movieName: "Weather With You",
    description:
      'Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: "Này, từ bây giờ trời hãy hửng nắng đi nào." Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.',
    image: spyCarousel,
    episode: "01",
    type: "Movie",
    status: "Finished",
    studios: "CoMix Wave Films",
    duration: "112 Min.",
    genres: "Drama, Fantasy, Romance",
  },
  {
    id: "2",
    movieName: "One Piece",
    description:
      "Gol D. Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.",
    image: onePiece,
    episode: "1018",
    type: "TV",
    status: "Ongoing",
    studios: "Toei Animation",
    duration: "24 Min.",
    genres: "Action, Adventure, Fantasy",
  },
  {
    id: "3",
    movieName: "Boruto: Naruto Next Generations",
    description:
      "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – con của Orochimaru.",
    image: boruto,
    episode: "250",
    type: "TV",
    status: "Ongoing",
    studios: "Pierrot",
    duration: "23 Min.",
    genres: "Action, Adventure, Martial Arts",
  },
  {
    id: "4",
    movieName: "Spy X Family",
    description:
      "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới.",
    image: spyCard,
    episode: "07",
    type: "TV",
    status: "Ongoing",
    studios: "Wit Studio, CloverWorks",
    duration: "24 Min.",
    genres: "Action, Comedy, Slice of Life",
  },
  {
    id: "5",
    movieName: "Shingeki no Kyojin",
    description:
      "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
    image: attackOnTitan,
    episode: "28",
    type: "TV",
    status: "Finished",
    studios: "MAPPA",
    duration: "24 Min.",
    genres: "Action, Drama, Mystery",
  },
  {
    id: "6",
    movieName: "Captain Tsubasa",
    description:
      "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của Tsubasa Giấc mơ sân cỏ, với những chi tiết được thêm hoặc bỏ để cộng thêm nét đặc trưng vào bộ truyện.",
    image: captainTsubasa,
    episode: "28",
    type: "TV",
    status: "Finished",
    studios: "David Production",
    duration: "23 Min.",
    genres: "Sports, Drama",
  },
  {
    id: "7",
    movieName: "Aoashi",
    description:
      "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo.",
    image: aoashi,
    episode: "28",
    type: "TV",
    status: "Finished",
    studios: "Production +h.",
    duration: "23 Min.",
    genres: "Sports, Drama",
  },
];
