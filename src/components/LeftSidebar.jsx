import personalInfo from "../data/personalInfo";;

const LeftSidebar = () => {
  return (
    <div className="w-full space-y-4 sm:space-y-6">

      <div className="block md:hidden">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <img
                src="/aman.png"
                alt="Mohammed Aman Bhuiyan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-1 leading-tight">
              {personalInfo.name}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2">
              {personalInfo.title}
            </p>
        
          </div>
        </div>


        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
          {personalInfo.socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200 group py-1 px-2 rounded-lg hover:bg-gray-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent
                  size={14}
                  className="group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                />
                <span className="text-xs hidden sm:inline">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>


      <div className="hidden md:block space-y-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <img
              src="/aman.png"
              alt="Mohammed Aman Bhuiyan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>


        <div className="text-center px-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
            {personalInfo.name}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {personalInfo.title}
          </p>
        </div>

        

        <div className="space-y-3 px-2">
          {personalInfo.socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="flex items-center justify-start space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent
                  size={16}
                  className="group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                />
                <span className="text-sm break-words">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;