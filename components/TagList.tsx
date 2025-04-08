
// Sample JSON data (you can also import it from a JSON file)
const tags = [
   {
      text: "Shark Tank Featured",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7017113218225455104/"
   },
   {
      text: "30 Under 30 Techie",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6560229816279371776/"
   },
   
   {
      text: "Meta DevCircle Lead",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6610750093526167552/"
   }
];

const TagList = () => {
   return (
      <div className="mt-4 flex flex-wrap gap-2 text-sm ">
         {tags.map((tag, index) => (
            <a
               key={index}
               href={tag.link}
               target="_blank"
               rel="noopener noreferrer"
               className={`${tag.bgColor} ${tag.textColor} px-3 py-1 rounded-full`}
            >
               {tag.text}
            </a>
         ))}
      </div>
   );
};

export default TagList;
