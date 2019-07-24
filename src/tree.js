import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';


class Tree extends React.Component {
  state = { open: false };

  onToggle = (event) => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { member } = this.props; 
    return (
      <div>
        <button
          className={classNames(styles.member, {
            [styles.male]: member.sex === 'male',
            [styles.female]: member.sex === 'female',
          })}
          onClick={(event) => this.onToggle(event)}>
          {member.name}
        </button>

        {this.state.open && member.hasOwnProperty('children') && (
          <div>
            <div className={styles.memberDetails}>
              <div className={styles.partnerInfo}> 
                Partner: {member.partner} 
              </div>
              <div className={styles.dateOfBirthInfo}> 
                Date of birth: {member.dateOfBirth} 
              </div>
              <div className={styles.childrenInfo}> 
                Children:
              </div>
            </div>
          <div style={{marginLeft: '40px'}}>
            {member.children.map((child, index) => (
              <Tree key={index} member={child} />
            ))}
          </div>
          </div>
        )}
      </div>
    )
  }
}

export default Tree;
