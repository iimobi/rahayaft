


const UserCm = ({name,index,client,userIndex,item}) => {
    let position = "nextCm";
 if(userIndex === index){
    position = 'activeCm'
   }
 if(userIndex === index - 1 || (index === 0 && userIndex === item.length - 1)){
    position = 'lastCm'
   }
    
    
    return(
            <div className={position} key={userIndex}>
                <div className="Logo"></div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                  ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
                <h3>{name}</h3>
                <h4>{client}</h4>
                <p>{userIndex}</p>
            </div>
    );
}

export default UserCm;