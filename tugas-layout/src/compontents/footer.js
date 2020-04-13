import React, { Component } from 'react'
import './style.css'

class Footer extends Component {
    constructor(){
        super();
        this.state = {comment:[]};
    }

    addComment = (e) => {
        e.preventDefault();

        let nama = this.refs.nama.value;
        let komentar = this.refs.komentar.value;
    
        this.state.comment.push({nama, komentar});
        this.setState({comment: this.state.comment});
    
        this.refs.formComment.reset();
        this.refs.nama.focus();
    }

    removeComment = (index) => {
        this.state.comment.splice(index,1);
        this.setState({comment: this.state.comment});
    }

    render(){
        return(
            <div className="bottom">
                <div className="comment">
                    <div className="form-comment">
                    <form ref="formComment" class="form-grup">
                        <div class="">
                            <label class="control-label col-sm-2">Name</label>
                            <div class="col-sm-12">
                                <input ref="nama" type="text" class="form-control" placeholder="Enter Name Here.."/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2">Comment</label>
                            <div class="col-sm-12">
                                <textarea ref="komentar" placeholder="Enter Your Comment Here.."></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button onClick={this.addComment} class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                        <div className="kumpulan-comment">
                            {this.state.comment.map((data, i) =>
                            <div className="isi-komentar">
                                <label class="control-label">Nama : {data.nama}</label>
                                <p>Komentar : {data.komentar}</p>
                                <button className="col-2 btn btn-outline-primary" onClick={()=>this.removeComment(i)}>Hapus</button>
                            </div>
                            )}
                        </div>
                </div>
                <div class="footer footer-copyright text-center py-3">Sarana Informasi: <br/> <br/>
                    {
                        this.props.media.map((media) =>
                        <span className="col-3">
                            <img src={media.logo} height="30px" width="30px"></img>
                            <a href="#">{media.label}</a>
                        </span>
                        )
                    }
                </div>
                
            </div>
        );
    }
}

export default Footer;