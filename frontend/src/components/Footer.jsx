
export default function Footer() {
    
    return (
        <div style={{padding: "12px 0px", backgroundColor : " color:#43cee0", textAlign: 'center', position:'fixed', width: '100%',height : '85px', bottom : '0', left: '0', right: '0', zIndex : '999'}}>
            
            <div className="text-center">
                    <h5>
                        Made with ❤️ by Malaika Mustafa
                    </h5>
            </div> 

            <div className="text-center pt-1">
                <a href="https://www.linkedin.com/in/malaika-mustafa-323a55288/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{fontSize : "20px"}}></i>
                </a>
                

                <a href="https://github.com/Malaika-Mustafa" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                </a>

                <a href="mailto:malaikamustafa662@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{fontSize : "21px"}}></i>
                </a>
            </div>
           
        </div>
       
    )
}
