import React from 'react';
import $ from 'jquery';
import Category from './Category/Category';
import Words from './Words/Words';
import './home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    const { data, categoryName } = this.props;
    let categoryData = null;
    if (categoryName) {
      let [filteredData] = data.allWordsJson.edges.filter(
        data => data.node.en === categoryName
      );

      categoryData = filteredData.node;
    }

    this.state = {
      categoryData: categoryData,
    };
  }

  componentDidMount() {
    if (this.state.categoryData) {
      $('#wordsModal').modal('show');
    }
  }

  onCategoryClick = categoryData => {
    this.setState({
      categoryData,
    });
  };

  render() {
    const { data } = this.props;
    const { categoryData } = this.state;

    return (
      <>
        <div className="container">
          <div className="categories">
            <div className="row text-center">
              {data.allWordsJson.edges.map(x => {
                return (
                  <Category
                    key={x.node.en}
                    data={x.node}
                    onClick={this.onCategoryClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Words category={categoryData} />
      </>
    );
  }
}
