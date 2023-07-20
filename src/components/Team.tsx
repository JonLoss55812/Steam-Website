```tsx
import React from 'react';
import { TeamMemberType } from '../types/index';

interface TeamProps {
  teamMembers: TeamMemberType[];
}

const Team: React.FC<TeamProps> = ({ teamMembers }) => {
  return (
    <section id="team">
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
```