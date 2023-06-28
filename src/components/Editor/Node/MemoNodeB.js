import { useEffect, useCallback, useState } from 'react';
import { Handle, Position, NodeResizer } from 'reactflow';
import {nodesMap} from './../Editingbox2'

const MemoNodeB = ({ id, data, selected }) => {
  const [memo, setMemo] = useState(data.memo);

  const onMemoChange = useCallback((evt) => {
    const normalizedMemo = evt.target.value.normalize('NFKD');
    setMemo(normalizedMemo);
  }, []);

  useEffect(() => {
    // This is your map iteration code 
    nodesMap.forEach((node, nodeId) => {
      if (node.selected === true) {
        node.data = {
            ...node.data,
            memo: memo
        };
        nodesMap.set(nodeId, node);
        console.log('노드는 ', node);
        console.log('바뀌고 있어 이건 확실해');
        // updateNodeInternals(nodeId);  // Trigger re-render of this node.
        // onNodesChange(nodes.map(node => node.id === id ? { ...node, data: { ...node.data, memo: content } } : node));
      }
    });
  }, [memo]);

  const handleStyle = {
    background: 'red', // 핸들의 배경색 설정
    border: '2px solid white', // 핸들의 테두리 설정
    borderRadius: '10%', // 핸들의 원형 모양 설정
    width: '15px', // 핸들의 너비 설정
    height: '15px', // 핸들의 높이 설정
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
        <NodeResizer
          color="#ff0071"
          isVisible={selected}
          minWidth={300}
          minHeight={300}
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
          handleStyle={handleStyle}
        >
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </NodeResizer>
      </div>
      <div
        className="memoNodeB"
        style={{
          position: 'relative',
          background: '#75CEC5',
          background: 'linear-gradient(-150deg, transparent 1.5em, #75CEC5 0)',
          width: '100%',
          height: '100%',
          padding: '10px',
          color: 'white',
          borderRadius: '.5em',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="foldedCorner"
          style={{
            content: "''",
            position: 'absolute',
            top: '0',
            right: '0',
            background:
              'linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat',
            width: '1.73em',
            height: '3em',
            transform: 'translateY(-1.3em) rotate(-30deg)',
            transformOrigin: 'bottom right',
            borderBottomLeftRadius: 'inherit',
            boxShadow: '-.2em .2em .3em -.1em rgba(0,0,0,.15)',
          }}
        ></div>
        <div className="content" style={{ padding: '20px', flex: '1' }}>
          <textarea
            id="content"
            value={data.memo}
            onChange={onMemoChange}
            className="overflow-auto"
            rows={6}
            style={{
              resize: 'none',
              width: '100%',
              height: '100%',
              border: 'none',
              outline: 'none',
              backgroundColor: '#75CEC5',
              marginTop: '5px',
              color: 'black',
              fontSize: '20pt'
            }}
          >
            
            </textarea>
        </div>
      </div>
    </div>
  );
};

export default MemoNodeB;