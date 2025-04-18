import { useCallback } from 'react';
import { Node, useNodesState } from 'reactflow';

interface FlowToolbarProps {
  nodes: Node[];
  setNodes: ReturnType<typeof useNodesState>[1];
}

function FlowToolbar({ nodes, setNodes }: FlowToolbarProps) {
  const addNode = useCallback(() => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      type: 'custom',
      data: { 
        label: `Node ${nodes.length + 1}`, 
        description: 'This is a new custom node' 
      },
      position: { 
        x: Math.random() * 500, 
        y: Math.random() * 500 
      },
    };
    
    setNodes((nds) => [...nds, newNode]);
  }, [nodes, setNodes]);

  return (
    <div className="flow-toolbar">
      <button onClick={addNode} className="flow-toolbar-button">
        Add Node
      </button>
    </div>
  );
}

export default FlowToolbar; 